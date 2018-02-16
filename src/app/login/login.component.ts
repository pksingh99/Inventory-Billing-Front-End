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

submitPass(){
  this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
this.apiurl = this.apiurl + "connect/";
this.apiurl="http://localhost/inventory/";
this.http.get(this.apiurl + 'login.php?uname='+this.user+"&upass="+this.password).subscribe(
(res: Response) => { //const abc = res.json();
this.userres = res.json();
  if(this.userres[0]['result']==true){
    this.openSnackBar(this.userres[0]['name'],"Welcome");
    this.lol.setLol();
    this.lol.setUser(this.userres);
    this.router.navigateByUrl('/makebills');
  }
  else{
    this.openSnackBar("Incorrect Username/Password","Try Again");

  }
})

}



}
