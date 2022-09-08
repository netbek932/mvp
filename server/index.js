const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({extended: true}));

app.post('/', function(req, res) {
  //res.send("POST Request Called")
})

app.get('/', function(req, res) {

})

let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});