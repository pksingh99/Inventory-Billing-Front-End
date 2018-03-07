import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
declare var JsBarcode: any;
import '../../assets/JsBarcode.all.js';
import { LolService } from '../lol.service';

@Component({
  selector: 'app-barcode2',
  templateUrl: './barcode2.component.html',
  styleUrls: ['./barcode2.component.css']
})
export class Barcode2Component implements OnInit {

  constructor(public http:Http,public lol:LolService ) { }
  public apiurl:string="http://localhost/inventory/";

barcode:any="";
details:any="";
description:any="";
rate:any="";
border:boolean=false;
name:any="";
no:any=null;
  ngOnInit() {
    this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
  this.apiurl = this.apiurl + "inventory/";
  this.apiurl = this.apiurl.replace(/:4200/g, '').toLowerCase();

  }

  barthecode(s,x){
    console.log(s,x);
    new JsBarcode("#"+s, x, {
    displayValue: true,
    lineColor: "black", width:4, height:40,
    fontSize: 15,format: "CODE128"
  });
  }
getItem(str){

  this.http.get(this.apiurl + 'getItem2.php?useracc='+this.lol.getAcc()+'&barcode='+this.barcode).subscribe(
  (res: Response) => { //const abc = res.json();
    this.details = res.json();
  this.description=  this.details[0]["description"];
  this.rate=this.details[0]["srate"];
//this.barthecode(this.details[0]["description"],this.details[0]["barcode"]);
  })
}

}
