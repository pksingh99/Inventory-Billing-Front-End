import { Component ,OnInit} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {MdSnackBar} from '@angular/material';
import { LolService } from './lol.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  public view:number=0;
public user:any;
public utype:any;
  public apiurl:string="http://localhost/inventory/";
  constructor(private router: Router,private lol:LolService,private http:Http,public snackBar: MdSnackBar) { }


    ngOnInit() {
      this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
    this.apiurl = this.apiurl + "inventory/";
this.user=this.lol.getUser();
this.utype=this.user[0]['utype'];
console.log(this.utype+"utype");
var he=window.innerHeight;
//document.getElementById("whe").style.height = he+"px";
document.getElementById("whe").style.height="auto";
console.log(he);
    }

    showthis(){
      this.user=this.lol.getUser();

      this.utype=this.user[0]['utype'];
      console.log(this.utype+"utype");

    }

}
