import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';

@Component({
  selector: 'app-show-bills',
  templateUrl: './show-bills.component.html',
  styleUrls: ['./show-bills.component.css']
})
export class ShowBillsComponent implements OnInit {
  public apiurl:string="http://localhost/inventory/";
  public list:string="";
    public list2:string="";
  public invoiceNo:number=null;
  constructor(private http:Http) { }

  ngOnInit() {
  }
getBill(){
  this.http.get(this.apiurl + 'showbills.php?inid='+this.invoiceNo).subscribe(
  (res: Response) => { //const abc = res.json();
    this.list = res.json();

  })
  this.http.get(this.apiurl + 'showbilldetails.php?inid='+this.invoiceNo).subscribe(
  (res: Response) => { //const abc = res.json();
    this.list2 = res.json();

  })

}
}
