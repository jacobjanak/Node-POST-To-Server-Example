// dependencies
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

// server
let app = express();
let PORT = process.env.PORT || 8000;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
})

app.post('/', (req, res) => {
  res.json({
    clientSideData: req.body.userInput,
    serverSideData: 'Hello World'
  })
})

// run the server
app.listen(PORT, () => {
  console.log('Server running at http://localhost:' + PORT)
})
