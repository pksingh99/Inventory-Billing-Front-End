import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import { LolService } from '../lol.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent implements OnInit {

  constructor(private router: Router,private lol:LolService,private http:Http) { }
  public apiurl:string="http://localhost/inventory/";
public category:string="";
public result:any="";
public message:string="";
  ngOnInit() {
  }
addit(){

  this.http.get(this.apiurl + 'category.php?category='+this.category).subscribe(
  (res: Response) => { //const abc = res.json();
    this.result = res.json();
 if(this.result[0]['result']==true){
   this.message="Category Added";
   this.category="";

 }
 else{
   this.message="Catergory wasnot added";
 }
  })

}


}
