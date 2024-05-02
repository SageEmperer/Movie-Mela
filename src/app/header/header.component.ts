// header.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

searchTerm:string='';

  constructor(private router: Router,private fb:FormBuilder) {}
isHighlighted:boolean=false;
  ngOnInit(): void {

   
  }

  search(){
    if(this.searchTerm.trim()!==''){
      const encodedTerm=encodeURIComponent(this.searchTerm.trim());
      this.router.navigate(['/search/',encodedTerm]);
      this.searchTerm=''
    }
  }

 toggleing(){
  this.isHighlighted=!this.isHighlighted;
 }
  
  
}
