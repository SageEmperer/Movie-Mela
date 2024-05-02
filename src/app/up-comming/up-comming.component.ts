import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesLService } from '../services/movies-l.service';

@Component({
  selector: 'app-up-comming',
  templateUrl: './up-comming.component.html',
  styleUrls: ['./up-comming.component.css']
})
export class UpCommingComponent implements OnInit{
UpcommingMovies:any;

constructor(private http:HttpClient,private router:Router,private movieList:MoviesLService){}
  ngOnInit(): void {
    // getting upcoming movies
    this.movieList.getUpcommingData().subscribe((data)=>{
      this.UpcommingMovies=data.results
    })
  }

  navigate(id:any){
    this.router.navigate(['details/',id])
  }
      


}
