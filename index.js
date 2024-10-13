// Importing Express
const express = require('express');

// Creating an instance of Express
const app = express();

// Defining the /hello endpoint
app.get('/hello', (req, res) => {
    req.params.
  res.send('Hello, world!');
});

// Defining the /state endpoint that takes a 'value' parameter
app.get('/state', (req, res) => {
    // Extracting the 'value' parameter from the query string
    const value = req.query.value;
  
    // Logging the value to the console
    console.log(`Received value: ${value}`);
  
    // Sending a response back
    res.send(`Logged value: ${value}`);
  });

// Setting the port
const PORT = process.env.PORT || 3000;

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
