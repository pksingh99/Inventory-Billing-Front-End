import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
@Component({
  selector: 'app-make-bill',
  templateUrl: './make-bill.component.html',
  styleUrls: ['./make-bill.component.css']
})
export class MakeBillComponent implements OnInit {
  public getOneItem:any;
  public allBroughtItem:any=[];
  public apiurl:string="http://localhost/inventory/";
  public barcode:string="1000000000049";
  public amount:number=0;
  public invoice:any="";
  public invoiceNo:any="";
  public semp:number=null;
    public phone:number=null;
      public name:string=null;
    public employee:any="";
    public show:boolean=false;
    public gstshow:boolean=false;
  constructor(private http:Http) { }

  ngOnInit() {

    this.http.get(this.apiurl + 'getEmployees.php').subscribe(
    (res: Response) => { //const abc = res.json();
      this.employee = res.json();

    })

  }
goPrint(divName){
//  var printContents = document.getElementById(divName).innerHTML;
  //   var originalContents = document.body.innerHTML;
document.getElementById("hide").style.display="none";
//     document.body.innerHTML = printContents;

     window.print();
     document.getElementById("hide").style.display="";

  //   document.body.innerHTML = originalContents;

}
saveInvoice(){
  var d = new Date();
var time = d.getTime();
var date = d.getDate();
var year = d.getFullYear();
var month = d.getMonth();
var fulldate =year+"-"+month+"-"+date;
  //bills.php?items=[{"description":"hdgf","rate":1234,"barcode":9005787992},{"description":"aaaa","rate":123445,"barcode":908000867}]&comments=force%20be%20with%20you&totalAmount=1000&clientphone=888888888&clientname=bhav
  this.http.get(this.apiurl +'bills.php?invoicedate='+fulldate+'&items='+JSON.stringify(this.allBroughtItem)+'&comments=&totalAmount='+this.amount+'&clientphone='+this.phone+'&clientname='+this.name+'&EID='+this.semp+'&time='+time).subscribe(
  (res: Response) => { //const abc = res.json();
    this.invoice = res.json();
    console.log(this.invoice);
    this.invoiceNo=this.invoice[0]['invoiceNo'];
    console.log(this.invoiceNo+"invoiceNo");
  this.gstshow=true;
  this.show=true;
  })

}
gotMoney(){
  this.http.get(this.apiurl + 'showlib.php?sr='+0+"&sr1="+50).subscribe(
  (res: Response) => { //const abc = res.json();
    this.invoice = res.json();
    console.log(this.invoice);
    this.invoiceNo=this.invoice[0]['invoiceNo'];
    console.log(this.invoiceNo+"invoiceNo");
  })
}


updateBill(){
  var key,key1;
  this.amount=0;
    for(key in this.allBroughtItem){
      for(key1 in key){
      this.allBroughtItem[key]['amount'] =((this.allBroughtItem[key]['rate'])+(this.allBroughtItem[key]['gst']*this.allBroughtItem[key]['rate'])/100);
this.amount=this.amount+((this.allBroughtItem[key]['rate'])+(this.allBroughtItem[key]['gst']*this.allBroughtItem[key]['rate'])/100);
this.amount=Math.round(this.amount);
      }
    }
  console.log(this.allBroughtItem);
}
public kick:number;

makeAmount(){
var key;
  for(this.allBroughtItem in key){


  }

}

goGet(){
var addit=false;

  this.http.get(this.apiurl + 'getItem.php?barcode='+this.barcode).subscribe(
  (res: Response) => { //const abc = res.json();
    this.getOneItem = res.json();
    var key,key1;
    for(key in this.allBroughtItem){
      for(key1 in key){
        if(this.allBroughtItem[key]['barcode']==this.barcode)
       {
         addit=true;
       }

          }
    }
if(addit==false){
this.allBroughtItem.push({"description":this.getOneItem[0]['description'],"rate":this.getOneItem[0]['rate'],"barcode":this.getOneItem[0]['barcode'],"gst":0,"amount":this.getOneItem[0]['rate']})
}
this.updateBill();

  })
}
}
