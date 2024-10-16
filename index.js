// Importing Express
const express = require('express');
const path = require('path');

// Creating an instance of Express
const app = express();
app.use(express.json());

// Defining the /hello endpoint
app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/index.html'));
});

let server_value = 0;
app.get('/value', (req, res) => {
  res.send(`{"value": "${server_value}"}`)
})

app.get('/increment', (req, res) => {
  server_value += 1;
  console.log('logging server value: ' + server_value);
  res.statusCode = 204;
  res.send();
})

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
