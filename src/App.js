// import React, { useState } from "react";
// import Axios from "axios";
// import styled from "styled-components";
// import MovieComponent from "./components/MovieComponent";
// import MovieInfoComponent from "./components/MovieInfoComponent";
// 
// export const API_KEY = "a9118a3a";
// 
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const AppName = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;
// const Header = styled.div`
//   background-color: black;
//   color: white;
//   display: flex;
//   justify-content: space-between;
//   flex-direction: row;
//   align-items: center;
//   padding: 10px;
//   font-size: 25px;
//   font-weight: bold;
//   box-shadow: 0 3px 6px 0 #555;
// `;
// const SearchBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 10px 10px;
//   border-radius: 6px;
//   margin-left: 20px;
//   width: 50%;
//   background-color: white;
// `;
// const SearchIcon = styled.img`
//   width: 32px;
//   height: 32px;
// `;
// const MovieImage = styled.img`
//   width: 48px;
//   height: 48px;
//   margin: 15px;
// `;
// const SearchInput = styled.input`
//   color: black;
//   font-size: 16px;
//   font-weight: bold;
//   border: none;
//   outline: none;
//   margin-left: 15px;
// `;
// const MovieListContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   padding: 30px;
//   gap: 25px;
//   justify-content: space-evenly;
// `;
// const Placeholder = styled.img`
//   width: 120px;
//   height: 120px;
//   margin: 150px;
//   opacity: 50%;
// `;
// 
// const initialMovies = [
//   {
//     Title: "The Shawshank Redemption",
//     Year: "1994",
//     imdbID: "tt0111161",
//     Type: "movie",
//     Poster: "https://resizing.flixster.com/tdMXmsVnR-vIj4Q5IACpEZ7O1ak=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_v_h8_au.jpg",
//   },
//   {
//     Title: "The Godfather",
//     Year: "1972",
//     imdbID: "tt0068646",
//     Type: "movie",
//     Poster: "https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Poster: "https://m.media-amazon.com/images/I/61h-H6YpqHL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     Title: "Pulp Fiction",
//     Year: "1994",
//     imdbID: "tt0110912",
//     Type: "movie",
//     Poster: "https://cdn.britannica.com/66/141066-050-36AB089D/John-Travolta-Samuel-L-Jackson-Pulp-Fiction.jpg",
//   },
//   {
//     Title: "Schindler's List",
//     Year: "1993",
//     imdbID: "tt0108052",
//     Type: "movie",
//     Poster: "https://m.media-amazon.com/images/I/81+H4lZVw+L._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     Title: "The Lord of the Rings: The Return of the King",
//     Year: "2003",
//     imdbID: "tt0167260",
//     Type: "movie",
//     Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
//   },
//   {
//     Title: "3 Idiots",
//     Year: "2009",
//     imdbID: "tt1187043",
//     Type: "movie",
//     Poster: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
//   },
//   {
//     Title: "Dangal",
//     Year: "2016",
//     imdbID: "tt5074352",
//     Type: "movie",
//     Poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_FMjpg_UX1000_.jpg",
//   },
//   {
//     Title: "Bahubali: The Beginning",
//     Year: "2015",
//     imdbID: "tt2631186",
//     Type: "movie",
//     Poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/baahubali-the-beginning-part-i-et00031217-05-11-2020-06-57-14.jpg",
//   },
//   {
//     Title: "PK",
//     Year: "2014",
//     imdbID: "tt2338151",
//     Type: "movie",
//     Poster: "https://img.etimg.com/thumb/width-640,height-480,imgsize-319295,resizemode-75,msid-47516503/magazines/panache/pk-earns-13-5-million-in-china/pk_640x480.jpg",
//   },
//   {
//     Title: "Lagaan: Once Upon a Time in India",
//     Year: "2001",
//     imdbID: "tt0169102",
//     Type: "movie",
//     Poster: "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg",
//   },
//   {
//     Title: "Gully Boy",
//     Year: "2019",
//     imdbID: "tt2395469",
//     Type: "movie",
//     Poster: "https://upload.wikimedia.org/wikipedia/en/0/07/Gully_Boy_poster.jpg",
//   },
//   {
//     Title: "Queen",
//     Year: "2013",
//     imdbID: "tt3322420",
//     Type: "movie",
//     Poster: "https://upload.wikimedia.org/wikipedia/en/4/45/QueenMoviePoster7thMarch.jpg",
//   },
//   {
//     Title: "Zindagi Na Milegi Dobara",
//     Year: "2011",
//     imdbID: "tt1562872",
//     Type: "movie",
//     Poster: "https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
//   },
//   {
//     Title: "Barfi!",
//     Year: "2012",
//     imdbID: "tt2082197",
//     Type: "movie",
//     Poster: "",
//   },
// ];

// function App() {
//   const [searchQuery, updateSearchQuery] = useState("");
//   const [movieList, updateMovieList] = useState(initialMovies);
//   const [selectedMovie, onMovieSelect] = useState(null);
//   const [timeoutId, updateTimeoutId] = useState();
// 
//   const fetchData = async (searchString) => {
//     const response = await Axios.get(
//       `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
//     );
//     updateMovieList(response.data.Search);
//   };
// 
//   const onTextChange = (e) => {
//     onMovieSelect(null);
//     clearTimeout(timeoutId);
//     updateSearchQuery(e.target.value);
//     const timeout = setTimeout(() => fetchData(e.target.value), 500);
//     updateTimeoutId(timeout);
//   };
// 
//   return (
//     <Container>
//       <Header>
//         <AppName>
//           <MovieImage src="/MovieMania/movie-icon.svg" />
//           React Movie App
//         </AppName>
//         <SearchBox>
//           <SearchIcon src="/MovieMania/search-icon.svg" />
//           <SearchInput
//             placeholder="Search Movie"
//             value={searchQuery}
//             onChange={onTextChange}
//           />
//         </SearchBox>
//       </Header>
//       {selectedMovie && (
//         <MovieInfoComponent
//           selectedMovie={selectedMovie}
//           onMovieSelect={onMovieSelect}
//         />
//       )}
//       <MovieListContainer>
//         {movieList.length ? (
//           movieList.map((movie, index) => (
//             <MovieComponent
//               key={index}
//               movie={movie}
//               onMovieSelect={onMovieSelect}
//             />
//           ))
//         ) : (
//           <Placeholder src="/MovieMania/movie-icon.svg" />
//         )}
//       </MovieListContainer>
//     </Container>
//   );
// }
// 
// export default App;


import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";
import BookingSeatsPage from "./components/BookingSeatsPage";

export const API_KEY = "a9118a3a";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;

const initialMovies = [
  {
    Title: "The Shawshank Redemption",
    Year: "1994",
    imdbID: "tt0111161",

    Poster: "https://resizing.flixster.com/tdMXmsVnR-vIj4Q5IACpEZ7O1ak=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_v_h8_au.jpg",
  },
  {
    Title: "The Godfather",
    Year: "1972",
    imdbID: "tt0068646",

    Poster: "https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    imdbID: "tt0468569",

    Poster: "https://m.media-amazon.com/images/I/61h-H6YpqHL._AC_UF894,1000_QL80_.jpg",
  },
  {
    Title: "Pulp Fiction",
    Year: "1994",
    imdbID: "tt0110912",

    Poster: "https://cdn.britannica.com/66/141066-050-36AB089D/John-Travolta-Samuel-L-Jackson-Pulp-Fiction.jpg",
  },
  {
    Title: "Schindler's List",
    Year: "1993",
    imdbID: "tt0108052",

    Poster: "https://m.media-amazon.com/images/I/81+H4lZVw+L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",

    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    Title: "3 Idiots",
    Year: "2009",
    imdbID: "tt1187043",

    Poster: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
  },
  {
    Title: "Dangal",
    Year: "2016",
    imdbID: "tt5074352",

    Poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_FMjpg_UX1000_.jpg",
  },
  {
    Title: "Bahubali: The Beginning",
    Year: "2015",
    imdbID: "tt2631186",

    Poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/baahubali-the-beginning-part-i-et00031217-05-11-2020-06-57-14.jpg",
  },
  {
    Title: "PK",
    Year: "2014",
    imdbID: "tt2338151",

    Poster: "https://img.etimg.com/thumb/width-640,height-480,imgsize-319295,resizemode-75,msid-47516503/magazines/panache/pk-earns-13-5-million-in-china/pk_640x480.jpg",
  },
  {
    Title: "Lagaan: Once Upon a Time in India",
    Year: "2001",
    imdbID: "tt0169102",

    Poster: "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg",
  },
  {
    Title: "Gully Boy",
    Year: "2019",
    imdbID: "tt2395469",

    Poster: "https://upload.wikimedia.org/wikipedia/en/0/07/Gully_Boy_poster.jpg",
  },
  {
    Title: "Queen",
    Year: "2013",
    imdbID: "tt3322420",

    Poster: "https://upload.wikimedia.org/wikipedia/en/4/45/QueenMoviePoster7thMarch.jpg",
  },
  {
    Title: "Zindagi Na Milegi Dobara",
    Year: "2011",
    imdbID: "tt1562872",

    Poster: "https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
  },
  {
    Title: "Barfi!",
    Year: "2012",
    imdbID: "tt2082197",

    Poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Barfi%21_poster.jpg",
  },
];


function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [movieList, updateMovieList] = useState(initialMovies);
  const [selectedMovie, onMovieSelect] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const [showBookingPage, setShowBookingPage] = useState(false);

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect(null);
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  const handleBookNow = (seats) => {
    // Handle booking logic here
    console.log("Seats booked:", seats);
    setSelectedSeats(seats);
    setShowBookingPage(false); // Or redirect to a booking confirmation page
  };

  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src="/MovieMania/movie-icon.svg" />
          MovieMania
        </AppName>
        <SearchBox>
          <SearchIcon src="/MovieMania/search-icon.svg" />
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>
      {showBookingPage ? (
        <BookingSeatsPage
          movie={selectedMovie}
          onBookNow={handleBookNow}
        />
      ) : (
        <>
          {selectedMovie && (
            <MovieInfoComponent
              selectedMovie={selectedMovie}
              onMovieSelect={onMovieSelect}
            />
          )}
          <MovieListContainer>
            {movieList.length ? (
              movieList.map((movie, index) => (
                <MovieComponent
                  key={index}
                  movie={movie}
                  onMovieSelect={onMovieSelect}
                  onBookNow={() => {
                    onMovieSelect(movie);
                    setShowBookingPage(true);
                  }}
                />
              ))
            ) : (
              <Placeholder src="/MovieMania/movie-icon.svg" />
            )}
          </MovieListContainer>
        </>
      )}
    </Container>
  );
}

export default App;

