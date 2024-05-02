// similar-movies.component.ts

import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MoviesLService } from '../services/movies-l.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.css']
})
export class SimilarMoviesComponent implements OnInit {

@Input() similarMovies:any 
@Input() MovieSimiler:any 
  // similar movies data
  similarMoviess:any[]=[];
datat:any[]=[];
  // movie id
  moveId: any;

  constructor(
    private active: ActivatedRoute,
    private movieList: MoviesLService,
    private zone: NgZone,
    private http:HttpClient,
    private cdr:ChangeDetectorRef,
    private router:Router
    
    ) {
      
    }

  ngOnInit(): void {
    // getting movie id from route
    
  //   this.active.paramMap.subscribe((params)=>{
  //     this.moveId=params.get('id'); 
     

  //  })
  this.active.params.subscribe((params)=>{
    this.moveId=params['id'];
    this.movieList.getSimilarData(this.moveId).subscribe((data:any)=>{
      this.similarMoviess=data
      this.cdr.detectChanges();
   

    })
  })
  //  this.moveId=this.active.snapshot.paramMap.get('id');

    // getting similar movie using id
     


  }

  navigate(){
    this.router.navigateByUrl(`details/${this.moveId}`)
    // this.active.paramMap.subscribe((params)=>{
    //   this.moveId=params.get('id')
    // })
  }
    




}
