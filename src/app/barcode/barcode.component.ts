declare var JsBarcode: any;
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import '../../assets/JsBarcode.all.js';
import { Inject } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { MdIconModule, DateAdapter } from '@angular/material';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, MatSlideToggleModule } from '@angular/material';
import { MdSnackBar } from '@angular/material';
import { PageEvent } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LolService } from '../lol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit {
  public apiurl: string = "http://localhost/inventory/";

  public suppliers: string = "";
  public supp: any = "";
  public info: any = "";
  public details: any = "";
  public PID: any = "";
  public printbarcode: any = [];
  public sal: boolean = true;
  public from: any = null;
  public to: any = null;
  createMemGauge(q, i, x, y, z, a, b, c, e) {
    b = b.replace("-", "");
    b = b.replace("-", "");
    var s = "xx" + x;
    var out = document.createElement("div");
    var ini = document.createElement("div");
    var tit = document.createElement("div");
    tit.innerHTML = "<table style='height:0.05cm;width: 100%; margin-top: 10px;' ><tr></tr></table>";
    var des = document.createElement("div");
    des.innerHTML = "<table style='height:0.70cm;width: 100%;'><tr><td class='pno'  style='text-align:left;font-size:7px;width:50%;'><b>Silk Emporium</b></td><td class='pno' style='width:65%;font-size:9px;text-align:left;' ><b>Rs " + y + ".00</b></td></tr><tr><td class='pno' style='width:30%;font-size:7px;'> " + z + b.slice(2, 6) + "</td><td class='pno' style='width:40%;font-size:5px;'>BT:" + a + c + "</td></tr></table>";
    var t = document.createElement("img");
    //t.style.width="4cm";
    t.style.height = "0.75cm";
    t.id = s;

    //out.className="col-sm-3 ";
    out.style.width = "4cm"
    out.style.height = "2cm"
    //ini.className="bord";
    //ini.style.border="1px solid black";
    //ini.style.padding="1px 2px 1px 2px";
    //ini.style.margin="2px";
    //ini.appendChild(tit);
    //para.appendChild(rate);
    ini.appendChild(des);
    ini.appendChild(t);
    out.appendChild(ini);
    document.getElementById("here").appendChild(out);
    s = "#" + s;
    new JsBarcode(s, x, {
      displayValue: true,
      lineColor: "black", width: 4, height: 40,
      fontSize: 15, format: "CODE128"
    });  //drawGauge() is a function inside d3gauge.js
  }
  constructor(public router: Router, private lol: LolService, private http: Http, private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('de'); // DD.MM.YYYY}
  }

  getInfo(x, y) {
    var d = new Date(x);
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var fulldate = year + "-" + month + "-" + date;
    console.log(fulldate);
    var d = new Date(y);
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var fulldate1 = year + "-" + month + "-" + date;
    this.http.get(this.apiurl + 'getPurchaseList.php?startdate=' + fulldate + "&enddate=" + fulldate1 + "&sid=" + this.supp).subscribe(
      (res: Response) => { //const abc = res.json();
        this.details = res.json();
      })

  }

  clear() {

    document.getElementById("here").innerHTML = "";

  }
  done(x, y) {
    if (((x) && (y)) != null) {
      var d = new Date(x);
      var date = d.getDate();
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var fulldate = year + "-" + month + "-" + date;
      console.log(fulldate);
      var d = new Date(y);
      var date = d.getDate();
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var fulldate1 = year + "-" + month + "-" + date;
      console.log(fulldate1);
      this.http.get(this.apiurl + 'getPurchaseDetails.php?pid=' + this.PID).subscribe(
        (res: Response) => { //const abc = res.json();
          this.info = res.json();
          var key, key1;
          document.getElementById("here").innerHTML = "";
          for (key in this.info) {
            var aaa;
            var quan = this.info[key]["quantity"];
            if (this.sal) {
              for (aaa = 0; aaa < quan; aaa++) {
                this.createMemGauge(this.info[key]["quantity"], this.info[key]["invoiceNo"], this.info[key]["barcode"], this.info[key]["rate"], this.info[key]["description"], this.info[key]["SID"], this.info[key]["purchasedate"], this.info[key]["code"], this.info[key]["EID"]);
              }
            }
            else {
              this.createMemGauge(this.info[key]["quantity"], this.info[key]["invoiceNo"], this.info[key]["barcode"], this.info[key]["rate"], this.info[key]["description"], this.info[key]["SID"], this.info[key]["purchasedate"], this.info[key]["code"], this.info[key]["EID"]);

            }
            //  this.allBroughtItem.push({"subcat":this.getOneItem[0]['subcat'],"rate":this.getOneItem[0]['rate'],"barcode":this.getOneItem[0]['barcode'],"gst":0,"amount":this.getOneItem[0]['rate']})
            this.printbarcode.push({ "quantity": this.info[key]["quantity"], "invoiceNo": this.info[key]["invoiceNo"], "barcode": this.info[key]["barcode"], "rate": this.info[key]["rate"], "description": this.info[key]["description"], "SID": this.info[key]["SID"], "purchasedate": this.info[key]["purchasedate"], "code": this.info[key]["code"], "EID": this.info[key]["EID"] });


          }


        })

    }


  }
  goPrint(divName) {
    document.getElementById("carda").style.display = "none";
    document.getElementById("toolbar").style.display = "none";

    //     document.body.innerHTML = printContents;

    window.print();
    document.getElementById("carda").style.display = "";
    document.getElementById("toolbar").style.display = "";

  }
  getItems() {

    this.http.get(this.apiurl + 'getSelectedItem.php?pid=' + this.PID).subscribe(
      (res: Response) => { //const abc = res.json();
        this.details = res.json();
      })

  }

  ngOnInit() {
    this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
  this.apiurl = this.apiurl + "inventory/";
  this.apiurl = this.apiurl.replace(/:4200/g, '').toLowerCase();

    //this.router.parent.navigate(['/login']);
    if (!this.lol.getLol()) {

      this.router.navigateByUrl('/login');

    }
    //  this.createMemGauge("rohit");
    this.http.get(this.apiurl + 'getSupplier.php').subscribe(
      (res: Response) => { //const abc = res.json();
        this.suppliers = res.json();
      })
  }

}
