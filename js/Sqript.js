const Apikey = "6e68e83df2f02eec821aa01c5ae4ab83";
const ReadTocken ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTY4ZTgzZGYyZjAyZWVjODIxYWEwMWM1YWU0YWI4MyIsInN1YiI6IjY2MWY5YTI1NTI4YjJlMDE3ZDQwNzA3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6DLfm6K5i7UuJGRxlYQpFhJ5Syd65EOn4JEQsjO-HE4";

const forme = document.querySelector('form');

forme.addEventListener('submit', handleSubmit);

defoultpicturepath = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/195px-No-Image-Placeholder.svg.png'

function handleSubmit(event){
    event.preventDefault();

    //console.log('search submitted!')

    const searchterm = forme.querySelector('input').value;
    const searchatribute = forme.querySelector('select').value;

    console.log(searchterm, searchatribute);

    if (searchatribute.match("movie")) {
        //console.log("We looking for a movie")

        moviesearch(searchterm);
    }else {
        //console.log("we looking or a person")

        personsearch(searchterm);
    }
}

function clearcontent() {
  document.getElementById('contentdiv').innerHTML = " "
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTY4ZTgzZGYyZjAyZWVjODIxYWEwMWM1YWU0YWI4MyIsInN1YiI6IjY2MWY5YTI1NTI4YjJlMDE3ZDQwNzA3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6DLfm6K5i7UuJGRxlYQpFhJ5Syd65EOn4JEQsjO-HE4' }
};

function moviesearch (term) {
  clearcontent();
  //console.log(term)
  
  fetch('https://api.themoviedb.org/3/search/movie?query=' + term + '&include_adult=false&language=en-US&page=1', options)
    .then(response => {
      if (response.status == 404) {
        throw new Error ('Movie not found')
      }
      else {
        return response.json();  
      }
    })
    .then(data => {
      if (data.results.length == 0){
        clearcontent();
        const div = document.getElementById("contentdiv")

        const errorEl = document.createElement('h1');
        errorEl.innerText = 'No movie found with that title';
        div.append(errorEl);
      }
        else {
        for (i=0; i<20; i++) {
        const movie = data.results[i];
        displaymovie(movie)
        }
      }
    }
  ).catch(error => responseError(error));
}

function displaymovie (movie) {
  const basepictureurl ='http://image.tmdb.org/t/p/w185';
  if (movie) {
    const div = document.getElementById("contentdiv")
  
    const titlestring = movie.title;
    //console.log("Title:", titlestring);
    const h2 = document.createElement('h2');
    const titletext = document.createTextNode(titlestring);
    h2.appendChild(titletext)
    div.appendChild(h2)

    const posterpath = movie.poster_path;
    //console.log("Posterpath:", posterpath)
    const img = document.createElement('img')

    if (posterpath == null) {
      img.src = defoultpicturepath
    } else {
      img.src = basepictureurl + posterpath
    }
    
    div.appendChild(img)
    
    const datestring = movie.release_date;
    //console.log("Release date:", datestring)
    const datep = document.createElement('p')
    const datetext = document.createTextNode(datestring)
    datep.appendChild(datetext)
    div.appendChild(datep)
    
    const decription = movie.overview;
    //console.log("decription:",decription)
    const decriptionP = document.createElement('p')
    const decriptiontext = document.createTextNode(decription)
    decriptionP.appendChild(decriptiontext)
    div.appendChild(decriptionP)
  } 
  console.log('Movie display completed')
}

async function personsearch (term) {
clearcontent()
//console.log(term)

fetch('https://api.themoviedb.org/3/search/person?query='+ term +'&include_adult=false&language=en-US&page=1', options)
  .then(response => {
    if (response.status == 404) {
      throw new Error ('Person not found')
    }
    else {
      return response.json();
    }
    
})
  .then(data => {
    if (data.results.length == 0){
      clearcontent();
      const div = document.getElementById("contentdiv")

      const errorEl = document.createElement('h1');
      errorEl.innerText = 'No persons found with that name';
      div.append(errorEl);
    }
    for (i=0; i<20; i++) {
    const people = data.results[i];
    displayperson(people)
    }
  }
).catch(error => responseError(error));
}

function displayperson (people) {

  const basepictureurl ='http://image.tmdb.org/t/p/w185';
  
  if (people) {
    const div = document.getElementById("contentdiv")
  
    const name = people.name;
    //console.log("name:", name);
    const h2 = document.createElement('h2');
    const nametext = document.createTextNode(name);
    h2.appendChild(nametext)
    div.appendChild(h2)

    
    const profilepicture = people.profile_path;
    //console.log("Picture:", profilepicture)
    const img = document.createElement('img')

    if (profilepicture == null) {
      img.src = defoultpicturepath
    }else {
      img.src = basepictureurl + profilepicture
    }
    div.appendChild(img)

    const knownforprofetion = people.known_for_department;
    //console.log("Profetion:", knownforprofetion)
    const profetionp = document.createElement('p')
    const profetiontext = document.createTextNode(knownforprofetion)
    profetionp.appendChild(profetiontext)
    div.appendChild(profetionp)
    
    const knowformedia = people.known_for;
    //console.log("Media:",knowformedia)
    
    let type = 'Media';
    let title = 'Title';
    let type2 = 'Media';
    let title2 = 'Title';
    let type3 = 'Media';
    let title3 = 'Title';
    
    console.log(knowformedia.length)
    let length = knowformedia.length;

    if (length === 3) {
      type = knowformedia[0].media_type
      title = knowformedia[0].title
      type2 = knowformedia[1].media_type
      title2 = knowformedia[1].title
      type3 = knowformedia[2].media_type
      title3 = knowformedia[2].title
      
    }else if (length === 2) {
      type = knowformedia[0].media_type
      title = knowformedia[0].title
      type2 = knowformedia[1].media_type
      title2 = knowformedia[1].title

    } else if (length === 1) {
      type = knowformedia[0].media_type
      title = knowformedia[0].title
    }else {
      console.log('There is no knownmedia found')
    }
    console.log(type+':'+title)
    const knownp = document.createElement('p')
    const knowntext = document.createTextNode (type+" : "+title)
    knownp.appendChild(knowntext)
    div.appendChild(knownp)

    console.log(type2+':'+title2)
    const knowp2 = document.createElement('p')
    const knowtext2 = document.createTextNode(type2+" : "+title2)
    knowp2.appendChild(knowtext2)
    div.appendChild(knowp2)

    console.log(type3+':'+title3)
    const knowp3 = document.createElement('p')
    const knowtext3 = document.createTextNode(type3+" : "+title3)
    knowp3.appendChild(knowtext3)
    div.appendChild(knowp3)

  } 
  console.log('People Display Completed')
}

async function Toprated () {

  clearcontent();

  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => {
    if(response.status >= 200 && response.status < 300){
        return response.json()
    }
    if(response.status === 404){
        throw new Error ('toprated not found');
    }
})
  .then(data => {
    for (i=0; i<10; i++) {
    const movie = data.results[i];
    diplaylist(movie)
    }
  }
).catch(error => responseError(error));
}

async function Popular () {

  clearcontent();

  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => {
      if(response.status >= 200 && response.status < 300){
          return response.json()
      }
      if(response.status === 404){
          throw new Error('Popular not found');
      }
  })
    .then(data => {
      for (i=0; i<10; i++) {
      const movie = data.results[i];
      diplaylist(movie)
      }
    }
  ).catch(error => responseError(error));
}

function diplaylist (movie) {
  
  const basepictureurl ='http://image.tmdb.org/t/p/w185';

  if (movie) {
    const div = document.getElementById("contentdiv")
  
    const titlestring = movie.title;
    //console.log("Title:", titlestring);
    const h2 = document.createElement('h2');
    const titletext = document.createTextNode(titlestring);
    h2.appendChild(titletext)
    div.appendChild(h2)

    const posterpath = movie.poster_path;
    //console.log("Posterpath:", posterpath)
    const img = document.createElement('img')
    img.src = basepictureurl + posterpath
    div.appendChild(img)
    
    const datestring = movie.release_date;
    //console.log("Release date:", datestring)
    const datep = document.createElement('p')
    const datetext = document.createTextNode(datestring)
    datep.appendChild(datetext)
    div.appendChild(datep)

  } else {
    console.log("No movie found with that title.");
  }
}
function responseError (error) {
    console.log(error.message)
  
    let value='';
    if (error.value === undefined) {
      value = 'Error value is undefined'
    }
    let errorstring = 'Network issue:'+' '+error.message+' '+value;
    clearcontent();
    const div = document.getElementById("contentdiv")

    const errorEl = document.createElement('h1');

    errorEl.innerText = errorstring;
    div.append(errorEl);
}