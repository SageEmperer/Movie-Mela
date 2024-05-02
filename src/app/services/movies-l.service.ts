import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesLService {

  constructor(private http:HttpClient) { }
// to get popular movies
  getPopularMovies():Observable<any>{
    return this.http.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=c3a444538ac89d0f62cf2c1a5f74f6eb"); 
}
// to get Top rated movies
  getTopRatedMovies():Observable<any>{
    return this.http.get<any>("https://api.themoviedb.org/3/movie/top_rated?api_key=c3a444538ac89d0f62cf2c1a5f74f6eb")
  }

// to get Now playing movies
  getNewReleaseMovies():Observable<any>{
    return this.http.get<any>("https://api.themoviedb.org/3/movie/now_playing?api_key=c3a444538ac89d0f62cf2c1a5f74f6eb")
  }
  // to get movie detail using id
  getMovieDetail(id:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=c3a444538ac89d0f62cf2c1a5f74f6eb`)
  }
  // get CastDetail using Id
  getMovieCast(id:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c3a444538ac89d0f62cf2c1a5f74f6eb`)
  }
// get movie videos using Id

getMovieVideos(id:any){
  return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c3a444538ac89d0f62cf2c1a5f74f6eb`)
}

// get movie backdrops images

getMovieBackdrops(id:any){
  return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/images?api_key=c3a444538ac89d0f62cf2c1a5f74f6eb`)
}

// get movie review using movie id

getMovieReview(id:any){
  return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=c3a444538ac89d0f62cf2c1a5f74f6eb`)
}

// get similar movie data

getSimilarData(id:any){
  return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=c3a444538ac89d0f62cf2c1a5f74f6eb`)
}

// get upcomming movies data
  getUpcommingData(){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/upcoming?api_key=c3a444538ac89d0f62cf2c1a5f74f6eb`)
  }


}