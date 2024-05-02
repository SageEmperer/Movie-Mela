import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesLService } from '../services/movies-l.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

nowPlayingMovies:any;  
topRatedMovies:any;
popularMovies:any;
NowPlaying:any;
upCommingMovies:any;

constructor(private http:HttpClient, private moviel:MoviesLService){

}
  ngOnInit(): void {
    this.moviel.getNewReleaseMovies().subscribe((data)=>{
      this.nowPlayingMovies=data.results
    })
    this.moviel.getTopRatedMovies().subscribe((data)=>{
      this.topRatedMovies=data.results
    })
    this.moviel.getPopularMovies().subscribe((data)=>{
      this.popularMovies=data.results
    })
    // getting upcomming data
    this.moviel.getUpcommingData().subscribe((data)=>{
      this.upCommingMovies=data.results
    }) 

  }
// three movies in the slide


  //importing httpclient as http 
  







}
