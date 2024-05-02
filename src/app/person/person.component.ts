import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit{

actorDetails:any;
actorId:any;
constructor(private http:HttpClient, private active:ActivatedRoute,
  private cdr:ChangeDetectorRef){}  
  ngOnInit(): void {

    this.active.params.subscribe((id)=>{
      this.actorId=id['id']
    })


    this.http.get<any>(`https://api.themoviedb.org/3/person/${this.actorId}?api_key=c3a444538ac89d0f62cf2c1a5f74f6eb`).subscribe((data)=>{
      this.actorDetails=data
      this.cdr.detectChanges()
      
    })
    
  }

getGenderLabel(gender:number):string{
  return gender === 1 ? 'Female':gender ===2? 'Male':'Unknown';
}  


}
