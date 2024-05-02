import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesLService } from '../services/movies-l.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css']
})
export class PostersComponent implements OnInit{
//movie poster images 
MoviePosterImages:any;
// movie id
MovieId:any;
// movie logos images
movieLogos:any;
// movie backdrops images
movieBackdropsImages:any;



constructor(private http:HttpClient,private movieData:MoviesLService,
  private active:ActivatedRoute){}
  ngOnInit(): void {
    // extracting id from the rout
    this.active.params.subscribe((movid:any)=>{
      this.MovieId=movid['id']
    })


    this.movieData.getMovieBackdrops(this.MovieId).subscribe((data)=>{
      this.MoviePosterImages=data.posters
      this.movieLogos=data.logos
      this.movieBackdropsImages=data.backdrops
    })
  }



}
