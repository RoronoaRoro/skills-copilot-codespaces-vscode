// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Use body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Create a variable to store comments
let comments = [];
// Create a variable to store the id of the next comment
let nextId = 1;
// Create a POST route for comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comment.id = nextId;
  nextId++;
  comments.push(comment);
  res.send(comment);
});
// Create a GET route for comments
app.get('/comments', (req, res) => {
  res.send(comments);
});
// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// End of comments.js