// server.js (Node.js Express example)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/api/save-receipt', (req, res) => {
    const receiptData = req.body;
    // Save receiptData to your database or file system
    console.log('Receipt Data Received:', receiptData);
    res.status(200).send('Receipt saved successfully');
});

app.listen(5000, () => console.log('Server is running on port 5000'));
