const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);

app.get('/hello', function (req, res) {
    console.log('Received request for root');
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port);
console.log('Server is running on http://localhost:' + port);