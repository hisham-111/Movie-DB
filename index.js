const express = require('express')
const router = express.Router();
const app = express()
const port = 3000

// start first rout
app.get('/', (req, res) => {
  res.send('OK!')
})
// end first rout



//start test route
app.get("/test", (req, res) => {
  const response = {
    status: 200,
    message: "ok",
  };
  res.send(response);
});
//end test route


//start time route
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
// end time route




// start Hello route

app.get("/hello/:id" , (req, res) => {
  const id = req.params.id;

  const response = {
    status: 200,
    message: "hello" , id,
  };
  res.send(response);
});

// end Hello route


// start search route

app.get('/search',(req,res) => {
   const search = req.query.s;
 

      if (typeof search != 'undefined') {
          const response = {status:200, message:"ok", data: search};res.send(response);
      }
      else {const response = {status:500, error:true, message: "you have to provide a search"};
      res.status(500);res.send(response);
      }
});

// end search route


















app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

