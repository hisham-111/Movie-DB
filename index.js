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







app.get("/movies/add", (req, res) => {


      var newMovie = { title: "", year: null, rating: 4 };

        newMovie.title = req.query.title;
        newMovie.year = parseInt(req.query.year);

    if (req.query.title !== undefined &&
        req.query.title !== "" &&
        !isNaN(req.query.year) && req.query.year !== "" && req.query.year.length == 4) 
        {

              if (req.query.rating == undefined) {
              movies.push(newMovie);
              res.send(movies);
              } 
              else {
              newMovie.rating = parseFloat(req.query.rating);
              movies.push(newMovie);
              res.send(movies);
              }
        } 
           
              else {
              res.status(403); 
              const response = {
              status: 403,
              error: true,
              message: "you cannot create a movie without providing a title and a year",
              }
              res.send(response);
              } 
});




// start get rout
app.get('/movies/get', (req, res) => {
  res.send('get')
})
// end get rout



// start edit rout
app.get('/movies/edit', (req, res) => {
  res.send('edit')
})
// end edit rout



// start delete rout
app.get('/movies/delete', (req, res) => {
  res.send('delete')
})
// end delete rout


const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

app.get("/movies/read", (req, res) => {
  res.send({
      status: 200,
      data: movies,
  });
});


app.get("/movies/read/by-date", (req, res) => {

  
  movies.sort(function(a,b){
  
    return new Date(b.year) - new Date(a.year);
  })
 
   const response = {
    status: 200,
    data: movies,
  };


  res.send(response);

});







app.get("/movies/read/by-rating", (req, res) => {

  
  movies.sort(function(b, a) {
    return a.rating - b.rating;
  });
 
   const response = {
    status: 200,
    data: movies,
  };


  res.send(response);

});


app.get("/movies/read/by-title", (req, res) => {

  
  movies.sort(function (a, b) {

  


    let up1 = a.title.toLowerCase();
    let up2 = b.title.toLowerCase();

    if (up1 < up2){
      return -1 ;
    }
    if (up2 > up2) {
      return 1;
    }
    return 0;
  });
 
   const response = {
    status: 200,
    data: movies,
  };


  res.send(response);

});



         

 
app.get("/movies/read/id/:id", (req, res) => {
  if (movies[req.params.id] == undefined) {
      
      res.send({
          status: 404,
          error: true,
          message: `the movie ${req.params.id} does not exist`,
      });
      res.status(404);
  } else {
      res.send({
          status: 200,
          data: movies[req.params.id],
      });
  }
});


























app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

