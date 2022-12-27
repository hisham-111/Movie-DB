const express = require('express')
const router = express.Router();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('OK!')
})





app.get("/test", (req, res) => {
  const response = {
    status: 200,
    message: "ok",
  };
  res.send(response);
});

app.get("/time", (req, res) => {
  let date_ob = new Date();

  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let dateTime = hours + ':' + minutes;

  const response = {
    status: 200,
    message: dateTime ,
  };

  res.send(response);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

