import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
 
SearchText:any;
searchedMovies:any; 
seatchQuery:any;

constructor(private http:HttpClient, private active:ActivatedRoute,private router:Router){
 
}

  ngOnInit(): void {
      // getting seach text
      this.active.paramMap.subscribe((params)=>{
        this.SearchText=params.get("movie")
        // console.log("this is search", this.SearchText)
        this.gettingSeachMovies()
      })
        

      
      // calling the search function to get the data
      
      
    }
    
    // getting movies of search
    gettingSeachMovies():void{
      if(this.SearchText){
        this.http.get<any>(`https://api.themoviedb.org/3/search/movie?query=${this.SearchText}&api_key=c3a444538ac89d0f62cf2c1a5f74f6eb`).subscribe((data)=>{
          this.searchedMovies=data;

        }) 
      }
      
     
    }

    
    
    navigateDetails(id:any):void{
      this.router.navigate(['details/',id])
      
    }
    
}
