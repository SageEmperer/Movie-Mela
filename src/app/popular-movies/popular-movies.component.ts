import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesLService } from '../services/movies-l.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit{

popularMovies:any;  

constructor(private http:HttpClient, private movielist:MoviesLService,private router:Router){
  
}  
ngOnInit(): void {
  this.movielist.getPopularMovies().subscribe((data)=>{
    this.popularMovies=data.results
    
  })
}

// getPopularMovies(){
//   this.http.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=c3a444538ac89d0f62cf2c1a5f74f6eb").subscribe((data)=>{
//   this.popularMovies=data.results
//   })
// }  

navigateToDetails(id:any){
  this.router.navigate(['details/',id])


}



}
