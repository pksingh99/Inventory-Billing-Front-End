import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-show-stock',
  templateUrl: './show-stock.component.html',
  styleUrls: ['./show-stock.component.css']
})
export class ShowStockComponent implements OnInit {
public apiurl:string="";
  constructor(private http:Http) { }

  ngOnInit() {
    this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
this.apiurl = this.apiurl + "connect/";
this.apiurl="http://localhost/inventory/";
this.showStock();
  }
 public displayStock:any;
 length = 100;
 pageSize = 10;
 pageSizeOptions = [5, 10, 25, 100];

 // MdPaginator Output
 pageEvent: PageEvent;
pageIndex=0;

 setPageSizeOptions(setPageSizeOptionsInput: string) {
   this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
 }
 showStock(){

   this.http.get(this.apiurl + 'showlib.php?sr='+0+"&sr1="+50).subscribe(
   (res: Response) => { //const abc = res.json();
     this.displayStock = res.json();

   })
 }


}
