import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.css']
})
export class NewReleaseComponent implements OnInit {

  NowPlaying:any;  
  ngOnInit(): void {
    this.getUpCommingThreeMovie()
  }
 

constructor(private http:HttpClient,private router:Router){}

  getUpCommingThreeMovie(){

    this.http.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=c3a444538ac89d0f62cf2c1a5f74f6eb").subscribe((data)=>{
      this.NowPlaying=data.results
     
    })
  
  }    

  naviGatingToDetails(id:any){
    this.router.navigate(['/details/',id])
  }


  
}
