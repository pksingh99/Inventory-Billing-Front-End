import { Component, OnInit,Inject } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { Http, Response, Headers } from '@angular/http';
import {MdIconModule,DateAdapter} from '@angular/material';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {MdSnackBar} from '@angular/material';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-libform',
  templateUrl: './libform.component.html',
  styleUrls: ['./libform.component.css']
})
export class LibformComponent implements OnInit {


  constructor(public snackBar: MdSnackBar,private http:Http,private dateAdapter:DateAdapter<Date>,public dialog: MdDialog) {    dateAdapter.setLocale('de'); // DD.MM.YYYY
 }


 openDialog(): void {
  let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
disableClose: false
  });

  dialogRef.afterClosed().subscribe(result => {
       if(result) {
this.submit();
       }
      dialogRef = null;
     });


}
 public description:string="";
 public quantity:number;
 public rate:number;
 public per:number;
 public amount:number;
  public purchasedate:any;
public apiurl:string="";
public resp:string="";
public message:string="";
public suppliers:string="";
public supp:number=null;
public invoiceNo:number=null;
  ngOnInit() {
    this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
this.apiurl = this.apiurl + "connect/";
this.apiurl="http://localhost/inventory/";
this.http.get(this.apiurl + 'getSupplier.php').subscribe(
(res: Response) => { //const abc = res.json();
  this.suppliers = res.json();
})
  }

  subm(x){

var d = new Date(x);
var date = d.getDate();
var year = d.getFullYear();
var month = d.getMonth();
var fulldate =year+"-"+month+"-"+date;
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

submit(){
  var d = new Date(this.purchasedate);
  var date = d.getDate();
  var year = d.getFullYear();
  var month = d.getMonth()+1;
  var fulldate =year+"-"+month+"-"+date;
  if((this.invoiceNo!=null) && (this.description!="") && (this.quantity!=null)&&(this.rate!=null)&&(this.supp!=null)&&(this.amount!=null)&&(this.purchasedate!=""))
  { this.message="";
    this.http.get(this.apiurl + 'libform.php?description='+this.description+"&quantity="+this.quantity+"&rate="+this.rate+"&sid="+this.supp+"&amount="+this.amount+"&purchasedate="+fulldate+"&invoiceNo="+this.invoiceNo).subscribe(
  (res: Response) => { //const abc = res.json();
    this.resp = res.json();
console.log(this.resp);
var key;
for(this.resp in key){
  console.log("hmmm"+key);
}
if(this.resp[0]['result']=="true"){

this.openSnackBar("Data Entered","Thanks");

 this.description="";
 this.quantity=null;
this.rate=null;
this.invoiceNo=null;
this.amount=null;
}
  })
}else{
console.log('libform.php?description='+this.description+"&quantity="+this.quantity+"&rate="+this.rate+"&sid="+this.supp+"&amount="+this.amount+"&purchasedate="+fulldate+"&invoiceNo="+this.invoiceNo);
  this.message="Please enter all values";
this.openSnackBar(this.message,"");
}}

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MdDialogRef<DialogOverviewExampleDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
