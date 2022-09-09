const express = require('express');
let app = express();
const { save } = require('../database/index');
const { getRandom } = require('../database/index');
const { getAll } = require('../database/index');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({extended: true}));

app.post('/meals', function(req, res) {
  var item = req.body.foodItem;
  save(item);
  res.end();
})

app.get('/meals', function(req, res) {
  getRandom()
  .then((result) => {
    console.log('here is your random food:', result.meal);
    res.send(result.meal);
  })
  .catch((err) => {
    console.log('Error getting a random food suggestion')})
})

app.get('/user/:meals', function(req, res) {
  getAll()
  .then((result) => {
    res.send(result);
  })
})

let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
