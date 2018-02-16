import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  constructor(public http:Http) { }

  ngOnInit() {
  }
  public apiurl:string="http://localhost/inventory/";
  public details:string="";
  public val:string="1";
  public inp:string="";

getBills(){
  
  this.http.get(this.apiurl + 'getBills.php?pid='+this.val+'&inp='+this.inp).subscribe(
  (res: Response) => { //const abc = res.json();
    this.details = res.json();
  })
}

}
