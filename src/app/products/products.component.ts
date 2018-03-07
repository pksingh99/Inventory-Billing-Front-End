import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {MdSnackBar} from '@angular/material';
import { LolService } from '../lol.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public apiurl:string="http://localhost/inventory/";
public suppliers:any="";
public category:any="";
public subcategory:any="";
public cate:any="";
public scate:any="";
public name:string="";
public barcode:string="generate";
public code:string="NA";
public inres:any;
public mrp:number=null;
public srp:number=null;
public prp:number=null;
public company:string;

  constructor(private http:Http,public snackBar: MdSnackBar,public lol:LolService) { }

  ngOnInit() {
    this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
  this.apiurl = this.apiurl + "inventory/";
  this.apiurl = this.apiurl.replace(/:4200/g, '').toLowerCase();

    this.getcates();
this.getsupp();
//    this.oncate();
  }

  showCate(ai){
    document.getElementById(ai).style.display="block";
  }

  hideCate(ai){
    document.getElementById(ai).style.display="none";
    this.getcates();
    if(ai=="overlay3"){
    //this.getsupp();
    }
  }
  oncate(){
    this.http.get(this.apiurl + 'getsubcategory.php?useracc='+this.lol.getAcc()+'&category='+this.cate).subscribe(
    (res: Response) => { //const abc = res.json();
      this.subcategory = res.json();
    })
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

insertProduct(){
  console.log(this.apiurl + 'products.php?useracc='+this.lol.getAcc()+'&category='+this.cate+'&subcategory='+this.scate+'&code='+this.code+'&barcode='+this.barcode+'&name='+this.name+'&srp='+this.srp+'&mrp='+this.mrp+'&prp='+this.prp+'&company='+this.company);
if(  (this.code!="")&& (this.barcode!="")&& (this.name!="")&&(this.company!=""))
{
  console.log((this.srp<=this.mrp)&&(this.prp<=this.srp));
  console.log(this.srp+"<="+this.mrp+this.prp+"<="+this.srp);
    this.validateInput();

}
else{
  this.openSnackBar("Please Enter Valid Data","Thanks");

}
}

validateInput(){
  this.http.get(this.apiurl + 'products.php?useracc='+this.lol.getAcc()+'&category='+this.cate+'&subcategory='+this.scate+'&code='+this.code+'&barcode='+this.barcode+'&name='+this.name+'&srp='+this.srp+'&mrp='+this.mrp+'&prp='+this.prp+'&company='+this.company).subscribe(
  (res: Response) => { //const abc = res.json();
    this.inres = res.json();
    if(this.inres[0]['result']=="true"){

    this.openSnackBar("Data Entered","Thanks");
    this.cate=this.scate=this.barcode=this.code=this.name="";
    this.barcode="generate";
    this.code="NA";
  }
  })
}

getsupp(){
  this.http.get(this.apiurl + 'getSupplier.php?useracc='+this.lol.getAcc()).subscribe(
  (res: Response) => { //const abc = res.json();
    this.suppliers = res.json();
  })
}
  getcates(){

  this.http.get(this.apiurl + 'getCategory.php?useracc='+this.lol.getAcc()+'&id='+Math.random()).subscribe(
  (res: Response) => { //const abc = res.json();
    this.category = res.json();
    console.log(this.category);
  })
}

}
