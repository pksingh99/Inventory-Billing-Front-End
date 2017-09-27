declare var JsBarcode: any;
import { Component, OnInit } from '@angular/core';
import '../../assets/JsBarcode.all.js';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  createMemGauge() {
        new JsBarcode("#barcode3", "1780199532179", {
        displayValue: true,
        fontSize: 20
      });  //drawGauge() is a function inside d3gauge.js
    }
  constructor() { }

  ngOnInit() {
    this.createMemGauge();
  }
print(){
  window.print();
}
}
