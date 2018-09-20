var express = require ('express');

var app = express();

var port = 8080 || process.env.PORT;
console.log(1);
console.log(2);

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(port, () => {
  console.log(`${port} is running`)
})