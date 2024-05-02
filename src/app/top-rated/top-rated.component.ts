import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
constructor(private http:HttpClient,private router:Router){}
topRatedMovies:any;  
  ngOnInit(): void {
    this.getTopRatedMovies()
  }
getTopRatedMovies(){
  this.http.get<any>("https://api.themoviedb.org/3/movie/top_rated?api_key=c3a444538ac89d0f62cf2c1a5f74f6eb").subscribe((data)=>{
  this.topRatedMovies=data.results

  })
}

// navigating

navigateToDetails(id:any){
  this.router.navigate(['details/',id])
}


}
