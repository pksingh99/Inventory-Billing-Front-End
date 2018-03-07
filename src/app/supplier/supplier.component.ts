import { Component, OnInit,Inject } from '@angular/core';
import {Http,Response} from '@angular/http';
import {MdSnackBar} from '@angular/material';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { LolService } from '../lol.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(private router: Router,private lol:LolService,private http:Http,public snackBar: MdSnackBar,public dialog: MdDialog) { }
public name:string="";
public address:string="";
public phone:number=null;
public gst:string="";
public others:string="";
public resp:string="";
public sint:string="";
public apiurl:string="http://localhost/inventory/";

 openDialog(): void {
  let dialogRef = this.dialog.open(DialogOverviewExampleDialog1, {
disableClose: false
  });

  dialogRef.afterClosed().subscribe(result => {
       if(result) {
this.doSubmit();
       }
      dialogRef = null;
     });


}

  ngOnInit() {
    this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
  this.apiurl = this.apiurl + "inventory/";
  this.apiurl = this.apiurl.replace(/:4200/g, '').toLowerCase();

    if(!this.lol.getLol()){

      this.router.navigateByUrl('/login');

    }
    //this.use.doSuccess();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
doSubmit(){

if((this.name!="")&&(this.address!="")&&(this.phone!=null)&&(this.sint!="")){
// do it

this.http.get(this.apiurl + 'supplier.php?useracc='+this.lol.getAcc()+'&sint='+this.sint+'&name='+this.name+"&address="+this.address+"&phone="+this.phone+"&gst="+this.gst+"&others="+this.others).subscribe(
(res: Response) => { //const abc = res.json();
this.resp = res.json();
console.log(this.resp);
var key;
for(this.resp in key){
console.log("hmmm"+key);
}
if(this.resp[0]['result']=="true"){

this.openSnackBar("Data Entered","Thanks");

this.name="";
this.phone=null;
this.address=null;
this.gst=null;
this.others=null;
this.sint=null;
}

else{
  this.openSnackBar("Error Occoured","Sorry");

}
})

}

}


}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog1 {

  constructor(
    public dialogRef: MdDialogRef<DialogOverviewExampleDialog1>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
