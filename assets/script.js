const API_KEY = '?api_key=e0a364d1ee5f1ae939ca0a68f7499606';
const BASE_URL = 'https://api.themoviedb.org/3/movie';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'language=en-US';

function getMovieData() {
  const randomMovie = Math.floor( Math.random() * 10000)+1;
  const newURL = `${BASE_URL}/${randomMovie}${API_KEY}`;
  
  fetch(newURL)
    .then(response => response.json())
    .then(data => {

      if(data.backdrop_path === undefined || data.backdrop_path === null)
      {
        return movieDisplay.innerHTML = "Sorry, movie is not available. Please try again."
      }
      else {
        return movieDisplay.innerHTML = `<img src="${IMG_URL}${data.backdrop_path}" alt="Movie image"</img> 
        <h2>${data.title}</h2> 
        <p>${data.overview}</p>`
      }
    })
      
    .catch(error => console.error(error))   
  }
