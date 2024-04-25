const Apikey = "6e68e83df2f02eec821aa01c5ae4ab83";
const ReadTocken ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTY4ZTgzZGYyZjAyZWVjODIxYWEwMWM1YWU0YWI4MyIsInN1YiI6IjY2MWY5YTI1NTI4YjJlMDE3ZDQwNzA3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6DLfm6K5i7UuJGRxlYQpFhJ5Syd65EOn4JEQsjO-HE4";

const forme = document.querySelector('form');

forme.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    console.log('search submitted!')

    const searchterm = forme.querySelector('input').value;
    const searchatribute = forme.querySelector('select').value;

    console.log(searchterm, searchatribute);

    if (searchatribute.match("movie")) {
        console.log("We looking for a movie")

        moviesearch(searchterm);
    }else {
        console.log("we looking or a person")

        personsearch(searchterm);
    }
}
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTY4ZTgzZGYyZjAyZWVjODIxYWEwMWM1YWU0YWI4MyIsInN1YiI6IjY2MWY5YTI1NTI4YjJlMDE3ZDQwNzA3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6DLfm6K5i7UuJGRxlYQpFhJ5Syd65EOn4JEQsjO-HE4' }
};

function moviesearch (term) {

  console.log(term) 
      
fetch('https://api.themoviedb.org/3/search/movie?query='+term+'&include_adult=false&language=en-US&page=1', options)
  .then (response => response.json())
  .then (response => displaymovie(response))
  .catch(err => console.error(err));    
}

function personsearch (term) {

console.log(term)

fetch('https://api.themoviedb.org/3/search/person?query='+term+'&include_adult=false&language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => displayperson(response))
  .catch(err => console.error(err));
}

function displaymovie (data) {
    console.log("displaymovie"+data)
    
}

function displayperson (data) {
    console.log("displaypeople"+data)
}

function Toprated () {
    
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

function Popular () {
fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}