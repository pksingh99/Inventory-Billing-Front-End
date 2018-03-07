import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import { LolService } from '../lol.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-newsubcategory',
  templateUrl: './newsubcategory.component.html',
  styleUrls: ['./newsubcategory.component.css']
})
export class NewsubcategoryComponent implements OnInit {


    constructor(private router: Router,private lol:LolService,private http:Http) { }
    public apiurl:string="http://localhost/inventory/";
    public category:any="";
    public cid:number=null;
  public subcategory:string="";

  public result:any="";
  public message:string="";
    ngOnInit() {
      this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
    this.apiurl = this.apiurl + "inventory/";
    this.apiurl = this.apiurl.replace(/:4200/g, '').toLowerCase();

      this.http.get(this.apiurl + 'getCategory.php?useracc='+this.lol.getAcc()+'&').subscribe(
      (res: Response) => { //const abc = res.json();
        this.category = res.json();
      })
    }
    refcat(){
      this.http.get(this.apiurl + 'getCategory.php?useracc='+this.lol.getAcc()+'&').subscribe(
      (res: Response) => { //const abc = res.json();
        this.category = res.json();
      })
    }
  addit(){

    this.http.get(this.apiurl + 'subcategory.php?useracc='+this.lol.getAcc()+'&cid='+this.cid+'&subcategory='+this.subcategory).subscribe(
    (res: Response) => { //const abc = res.json();
      this.result = res.json();
   if(this.result[0]['result']==true){
     this.message="Category Added";
     //this.category="";

   }
   else{
     this.message="Catergory wasnot added";
   }
    })

  }
}
