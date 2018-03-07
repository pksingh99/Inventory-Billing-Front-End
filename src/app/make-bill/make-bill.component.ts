import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { MdSnackBar } from '@angular/material';
import { LolService } from '../lol.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-make-bill',
  templateUrl: './make-bill.component.html',
  styleUrls: ['./make-bill.component.css']
})
export class MakeBillComponent implements OnInit {
  public getOneItem: any;
  public allBroughtItem: any = [];
  public apiurl: string = "http://localhost/inventory/";
  public barcode: string = "";
  public amount: number = 0;
  public invoice: any = "";
  public invoiceNo: any = "";
  public semp: number = 0;
  public phone: number = 0;
  public name: string = null;
  public employee: any = "";
  public show: boolean = false;
  public gstshow: boolean = false;
public acc:string=null;
public add:any="";
public whatsapp:any="";
public phonen:any="";
public aname:any="";
public uname:any="";
  options = [
    'One',
    'Two',
    'Three'
  ];
  constructor(private router: Router, private lol: LolService, private http: Http, public snackBar: MdSnackBar) { }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
  this.apiurl = this.apiurl + "inventory/";
  this.apiurl = this.apiurl.replace(/:4200/g, '').toLowerCase();

    if (!this.lol.getLol()) {

      this.router.navigateByUrl('/login');

    }
    else {
      console.log(this.lol.getUser());
    }
    this.aname=this.lol.getAcc();
    this.add=this.lol.getAdd();
    this.whatsapp=this.lol.getWhatsapp();
    this.phonen=this.lol.getPhone();
    this.semp=this.lol.getEID();
    this.uname=this.lol.getUserName();
    this.http.get(this.apiurl + 'getEmployees.php?useracc='+this.lol.getAcc()).subscribe(
      (res: Response) => { //const abc = res.json();
        this.employee = res.json();

      })

  }
  remove(pos) {
    this.allBroughtItem.splice(pos, 1);
    this.updateBill();
  }
  reset() {
    //  this.getOneItem=null;
    this.allBroughtItem = [];
    //  this.barcode="";
    this.amount = 0;
    //  this.invoice="";
    //this.invoiceNo="";
    //this.semp=null;
    this.phone = null;
    this.name = null;
    //  this.employee="";
    this.show = false;
    this.gstshow = false;
    console.log("rest");
  }
  goPrint(divName) {
    //  var printContents = document.getElementById(divName).innerHTML;
    //   var originalContents = document.body.innerHTML;
    document.getElementById("hide").style.display = "none";
    document.getElementById("toolbar").style.display = "none";

    //     document.body.innerHTML = printContents;

    window.print();
    document.getElementById("hide").style.display = "";
    document.getElementById("toolbar").style.display = "";


    //   document.body.innerHTML = originalContents;

  }
  saveInvoice() {
    if (this.allBroughtItem[0]['amount'] != 0) {
      var d = new Date();
      var time = d.getTime();
      var date = d.getDate();
      var year = d.getFullYear();
      var month = d.getMonth();
      var fulldate = year + "-" + month + "-" + date;
      //bills.php?useracc='+this.lol.getAcc()+'&items=[{"description":"hdgf","rate":1234,"barcode":9005787992},{"description":"aaaa","rate":123445,"barcode":908000867}]&comments=force%20be%20with%20you&totalAmount=1000&clientphone=888888888&clientname=bhav
      this.http.get(this.apiurl + 'bills.php?useracc='+this.lol.getAcc()+'&invoicedate=' + fulldate + '&items=' + JSON.stringify(this.allBroughtItem) + '&comments=&totalAmount=' + this.amount + '&clientphone=' + this.phone + '&clientname=' + this.name + '&EID=' + this.semp + '&time=' + time).subscribe(
        (res: Response) => { //const abc = res.json();
          this.invoice = res.json();
          console.log(this.invoice);
          this.invoiceNo = this.invoice[0]['invoiceNo'];
          console.log(this.invoiceNo + "invoiceNo");
          this.gstshow = true;
          this.show = true;
        })

    }
  }
  gotMoney() {

    this.http.get(this.apiurl + 'showlib.php?useracc='+this.lol.getAcc()+'&sr=' + 0 + "&sr1=" + 50).subscribe(
      (res: Response) => { //const abc = res.json();
        this.invoice = res.json();
        console.log(this.invoice);
        this.invoiceNo = this.invoice[0]['invoiceNo'];
        console.log(this.invoiceNo + "invoiceNo");
      })
  }


  updateBill() {

    var key, key1;
    this.amount = 0;
    for (key in this.allBroughtItem) {
      for (key1 in key) {
        if (this.allBroughtItem[key]['quantity'] < 1) {
          this.allBroughtItem[key]['quantity'] = 1;
        }
        this.allBroughtItem[key]['profit'] = this.allBroughtItem[key]['quantity'] * this.allBroughtItem[key]['profitper'];
        console.log(this.allBroughtItem[key]['quantity']+"quantity"+this.allBroughtItem[key]['profit']);
        this.allBroughtItem[key]['amount'] = ((this.allBroughtItem[key]['rate'] * this.allBroughtItem[key]['quantity']) + (this.allBroughtItem[key]['gst'] * this.allBroughtItem[key]['rate'] * this.allBroughtItem[key]['quantity']) / 100);
        this.amount = this.amount + ((this.allBroughtItem[key]['rate'] * this.allBroughtItem[key]['quantity']) + (this.allBroughtItem[key]['gst'] * this.allBroughtItem[key]['rate'] * this.allBroughtItem[key]['quantity']) / 100);
        this.amount = Math.round(this.amount);
      }
    }
    console.log(this.allBroughtItem);
  }
  public kick: number;

  makeAmount() {
    var key;
    for (this.allBroughtItem in key) {


    }

  }
  public bar: any;

  showCate(ai) {
    document.getElementById(ai).style.display = "block";
  }

  hideCate(ai) {
    document.getElementById(ai).style.display = "none";
  }
  public sbarcode: number = null;
  goGet() {
    var addit = false;

    this.http.get(this.apiurl + 'getItem.php?useracc='+this.lol.getAcc()+'&barcode=' + this.barcode).subscribe(
      (res: Response) => { //const abc = res.json();
        this.getOneItem = res.json();
        var key, key1, bar;
        for (key in this.allBroughtItem) {
          for (key1 in key) {
            if (this.allBroughtItem[key]['barcode'] == this.barcode) {
              addit = true;
              this.openSnackBar("Item Is Already Added", "");
            }
          }
        }
        console.log("hmm" + this.getOneItem.length + this.sbarcode);

        if ((this.getOneItem.length != 1)) {
          console.log("hmm");
          this.showCate('overlay1');
          if (this.sbarcode != null) {
            console.log("hmm");

            addit = false;
          }
          else {
            addit = true;

          }
        }
        else {
          this.sbarcode = 0;
        }

        if (addit == false) {
          this.http.get(this.apiurl + 'checkbarcode.php?useracc='+this.lol.getAcc()+'&barcode=' + this.barcode).subscribe(
            (res: Response) => { //const abc = res.json();
              this.bar = res.json();
              addit = this.bar[0]['barcode'];
              if (addit) {
                this.allBroughtItem.push({ "profit": 0,"profitper": this.getOneItem[this.sbarcode]['profit'], "prate": this.getOneItem[this.sbarcode]['prate'], "subcat": this.getOneItem[this.sbarcode]['subcat'], "rate": this.getOneItem[this.sbarcode]['rate'], "barcode": this.getOneItem[this.sbarcode]['barcode'], "gst": 0, "amount": this.getOneItem[this.sbarcode]['rate'], "quantity": 1 })
                this.updateBill();
                this.sbarcode = null;
              }
              else {
                this.openSnackBar("Item Is Already Billed", "");
              }
            })

        }
        this.updateBill();

      })
  }
}
