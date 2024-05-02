import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MoviesLService } from '../services/movies-l.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-movie-videos',
  templateUrl: './movie-videos.component.html',
  styleUrls: ['./movie-videos.component.css']
})
export class MovieVideosComponent implements OnInit{
  // movie videos
movieVideos:any;
// movie id 
movieId:any;

constructor(private http:HttpClient, private movieList:MoviesLService,private active:ActivatedRoute,private cdr:ChangeDetectorRef,private sanitizer:DomSanitizer){}


  ngOnInit(): void {
    // getting movie id
    this.active.params.subscribe((movieid:any)=>{
      this.movieId=movieid['id']
    })
    // getting movie videos
    this.movieList.getMovieVideos(this.movieId).subscribe((data)=>{
      this.movieVideos=data.results
      this.cdr.detectChanges();
    
    })
  }
getSafeUrl(videoKey:string):SafeResourceUrl{
  const youtubeUrl=`https://www.youtube.com/embed/${videoKey}`;
  return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);
}

  

}
