import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import { LolService } from '../lol.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  constructor(public http:Http,public lol:LolService) { }

  ngOnInit() {
    this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
  this.apiurl = this.apiurl + "inventory/";
  this.apiurl = this.apiurl.replace(/:4200/g, '').toLowerCase();

  }
  public apiurl:string="http://localhost/inventory/";
  public details:string="";
  public val:string="1";
  public inp:string="";

getBills(){

  this.http.get(this.apiurl + 'getBills.php?useracc='+this.lol.getAcc()+'&pid='+this.val+'&inp='+this.inp).subscribe(
  (res: Response) => { //const abc = res.json();
    this.details = res.json();
  })
}

}
