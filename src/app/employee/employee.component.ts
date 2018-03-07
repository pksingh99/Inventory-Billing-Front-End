import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { Http, Response, Headers } from '@angular/http';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {MdSnackBar} from '@angular/material';
import { LolService } from '../lol.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public router: Router,private lol:LolService,private http:Http,public snackBar: MdSnackBar,public dialog: MdDialog) { }
public name:string="";
public address:string="";
public phone:number=null;
public resp:string="";
public upass:string="";
public utype:string="";
public rpass:string="";
public uname:string="";
public apiurl:string="http://localhost/inventory/";
public utypee=[{name:"admin"},{name:"billing"}];

  ngOnInit() {
    this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
  this.apiurl = this.apiurl + "inventory/";
  this.apiurl = this.apiurl.replace(/:4200/g, '').toLowerCase();

    if(!this.lol.getLol()){

      this.router.navigateByUrl('/login');

    }
    console.log(this.lol.getLol());
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
addEmployee(){



  if(((this.upass==this.rpass))&&(this.utype!="")&&(this.name!="")&&(this.address!="")&&(this.phone!=null)&&(this.upass!="")&&(this.uname!=null)){
  // do it

  this.http.get(this.apiurl + 'employees.php?useracc='+this.lol.getAcc()+'&utype='+this.utype+'&uname='+this.uname+'&upass='+this.upass+'&name='+this.name+"&address="+this.address+"&phone="+this.phone).subscribe(
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
