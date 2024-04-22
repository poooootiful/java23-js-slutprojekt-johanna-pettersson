const Apikey = "6e68e83df2f02eec821aa01c5ae4ab83";
const ReadTocken ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTY4ZTgzZGYyZjAyZWVjODIxYWEwMWM1YWU0YWI4MyIsInN1YiI6IjY2MWY5YTI1NTI4YjJlMDE3ZDQwNzA3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6DLfm6K5i7UuJGRxlYQpFhJ5Syd65EOn4JEQsjO-HE4";
     
let searchterm = "Spider"

function getresults() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer .eyJhdWQiOiI2ZTY4ZTgzZGYyZjAyZWVjODIxYWEwMWM1YWU0YWI4MyIsInN1YiI6IjY2MWY5YTI1NTI4YjJlMDE3ZDQwNzA3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6DLfm6K5i7UuJGRxlYQpFhJ5Syd65EOn4JEQsjO-HE4'
    }
  };
  
  fetch('https://api.themoviedb.org/3/search/movie?query=spider&include_adult=false&language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

//Getmovie ();

//function Getmovie (textinput) {
  /*const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTY4ZTgzZGYyZjAyZWVjODIxYWEwMWM1YWU0YWI4MyIsInN1YiI6IjY2MWY5YTI1NTI4YjJlMDE3ZDQwNzA3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6DLfm6K5i7UuJGRxlYQpFhJ5Syd65EOn4JEQsjO-HE4'
    }
  };**/
  
  /**fetch('https://api.themoviedb.org/3/search/movie?query=spider&include_adult=false&language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  const url ="";**/

//};