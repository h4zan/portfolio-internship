import axios from "axios";
import { createHTML } from "../main";
import { IMovie } from "../models/IMovie";
import { IMovieExtended } from "../models/IMovieExtended";
import { IOmdbResponse } from "../models/IOmdbResponse";

export async function searchMovies(
  searchText: string,
  page: number
): Promise<IMovie[]> {
  let response = await axios.get<IOmdbResponse>(
    `http://omdbapi.com?apikey=${process.env.APIKEY}&s=${searchText}&page=
    ` + page
  );
  let movies = response.data.Search;
  createHTML(movies);
  console.log(response.data);

 
  return movies;
}


/* export async function searchMoviesExtended (movies:string):Promise<IMovieExtended >{
  let response = await axios.get<IMovieExtended>(
  
  `http://omdbapi.com/?apikey=${process.env.APIKEY}&t=${movies}`
    
     );

   let details=response.data
    
   console.log(details)

      return details

  }   

  let text="love"

  searchMoviesExtended(text) 
 */

/* export async function searchMoviesExtended(movies:[]){

  const requests = await movies?.map((imdbId: string) => {
    const results= axios.get(
      `http://omdbapi.com/?apikey=${process.env.APIKEY}&i=${imdbId}`
    );

    return results;
  });

const moviesArray = Promise.all(requests).then((resArray) => {
    const mappedresArray = resArray.map((data) => data.data);
    return mappedresArray;
  });

  return moviesArray;
}

searchMoviesExtended() */