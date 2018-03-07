import { Component, OnInit } from '@angular/core';
import { LolService } from '../lol.service';
import { Router, NavigationEnd } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private lol:LolService,private router: Router,private http:Http,public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
  this.apiurl = this.apiurl + "inventory/";
  this.apiurl = this.apiurl.replace(/:4200/g, '').toLowerCase();
    if(this.lol.getLol()){
      this.router.navigateByUrl('/makebills');
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  public apiurl:string="";
public user:any="";
public password:any="";
public userres:any="";
public acc:any="";
submitPass(){

if((this.user!=null)&&(this.password!=null)&&(this.acc!=null)){
//this.apiurl=this.dom.getDomain();
this.http.get(this.apiurl + 'login.php?uname='+this.user+"&upass="+this.password+"&useracc="+this.acc).subscribe(
(res: Response) => { //const abc = res.json();
this.userres = res.json();
  if(this.userres[0]['result']==true){
    this.openSnackBar(this.userres[0]['name'],"Welcome");
    this.lol.setLol();
    this.lol.setUser(this.userres);
      this.lol.setAcc(this.acc);
      this.lol.setUserName(this.userres[0]['name']);
      this.lol.setAname(this.userres[0]['aname']);
      this.lol.setPhone(this.userres[0]['phone']);
      this.lol.setWhatsapp(this.userres[0]['whatsapp']);
      this.lol.setAdd(this.userres[0]['address']);
      this.lol.setEID(this.userres[0]['eid']);
    this.router.navigateByUrl('/makebills');
  }
  else{
    this.openSnackBar("Incorrect Username/Password","Try Again");

  }
})
}
}



}
