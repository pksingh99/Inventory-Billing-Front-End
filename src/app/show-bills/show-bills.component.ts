import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import { LolService } from '../lol.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-show-bills',
  templateUrl: './show-bills.component.html',
  styleUrls: ['./show-bills.component.css']
})
export class ShowBillsComponent implements OnInit {
  public apiurl:string="http://localhost/inventory/";
  public list:any=[];
    public list2:any=[];
  public invoiceNo:number=null;
  public ph:any=null;
    public bar:any=null;
      public amm:any=null;
        public retun:any=null;
        public quant:any=null;

  constructor(private router: Router,private lol:LolService,private http:Http) { }

  ngOnInit() {
    if(!this.lol.getLol()){

      this.router.navigateByUrl('/login');

    }
  }
  public ret:string="";
  public es:string="";


  showCate(ai){
    document.getElementById(ai).style.display="block";
  }

  hideCate(ai){
    document.getElementById(ai).style.display="none";}
  return(b,i,r,rt,quant){
    if(rt<1){
      rt=1;
    }
    if(rt>quant){
      rt=quant;
    }
    console.log(b+","+i+","+r);
    this.http.get(this.apiurl + 'return.php?invoice='+i+'&barcode='+b+'&amount='+r+'&return='+rt+'&quantity='+quant).subscribe(
    (res: Response) => { //const abc = res.json();
      this.ret = res.json();
      this.es=this.ret[0]['result'];
if(this.es=="true"){
  this.ret="Item was returned !!!";
  this.getBill();
}

    })
  }
  getinv(){}
getBill(){
  this.list2=[];
  this.list=[];

  this.http.get(this.apiurl + 'showbills.php?inid='+this.invoiceNo).subscribe(
  (res: Response) => { //const abc = res.json();
    this.list = res.json();

  })
  this.http.get(this.apiurl + 'showbilldetails.php?inid='+this.invoiceNo).subscribe(
  (res: Response) => { //const abc = res.json();
    this.list2 = res.json();

  })

}
}
