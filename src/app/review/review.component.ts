import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesLService } from '../services/movies-l.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
// movie review data
movieReviewData:any;  
movId:any;

constructor(private active:ActivatedRoute,private movieList:MoviesLService,private http:HttpClient,private cdr:ChangeDetectorRef){}


  ngOnInit(): void {
    this.active.params.subscribe((data:any)=>{
      this.movId=data['id']
    })
  this.getdata()    
  }
  
  
  getdata() {
    this.movieList.getMovieReview(this.movId).subscribe((data: any) => {
      if (data && data.results) {
        this.movieReviewData = data.results.slice(0, 3);
        
        this.cdr.detectChanges(); //manually trigger change detection
      }
    });
  }

}
