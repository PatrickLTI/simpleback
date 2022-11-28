const express = require('express');
const bodyParser= require('body-parser');
constcors= require('cors'); //cross-orignresource sharing
constapp = express();
const port = 3001; // Must be different than the port of the React app
app.use(cors());  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(express.json()); // Allows express to read a request body
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))