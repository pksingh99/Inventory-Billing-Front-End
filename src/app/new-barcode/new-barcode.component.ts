import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {MdSnackBar} from '@angular/material';
import { LolService } from '../lol.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-new-barcode',
  templateUrl: './new-barcode.component.html',
  styleUrls: ['./new-barcode.component.css']
})
export class NewBarcodeComponent implements OnInit {

  constructor(private router: Router,private lol:LolService,private http:Http) { }
public ress:any="";
public apiurl:string="http://localhost/inventory/";

  ngOnInit() {
    this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
  this.apiurl = this.apiurl + "inventory/";
  this.apiurl = this.apiurl.replace(/:4200/g, '').toLowerCase();

    if(!this.lol.getLol()){

      this.router.navigateByUrl('/login');

    }
    else{
      this.router.navigateByUrl('/goback');

      console.log(this.lol.getUser());
    }
    this.http.get(this.apiurl + 'getEmployees.php').subscribe(
    (res: Response) => { //const abc = res.json();
      this.ress = res.json();

    })
  }

}
