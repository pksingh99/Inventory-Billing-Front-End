import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { Http, Response, Headers } from '@angular/http';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private http:Http,public snackBar: MdSnackBar,public dialog: MdDialog) { }
public name:string="";
public address:string="";
public phone:number=null;
public resp:string="";
public apiurl:string="http://localhost/inventory/";

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
addEmployee(){




  if((this.name!="")&&(this.address!="")&&(this.phone!=null)){
  // do it

  this.http.get(this.apiurl + 'employees.php?name='+this.name+"&address="+this.address+"&phone="+this.phone).subscribe(
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
  }

  else{
    this.openSnackBar("Error Occoured","Sorry");

  }
  })

  }

  }
}
