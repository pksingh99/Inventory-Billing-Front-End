import { Component, OnInit, Inject } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { Http, Response, Headers } from '@angular/http';
import { MdIconModule, DateAdapter } from '@angular/material';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { MdSnackBar } from '@angular/material';
import { PageEvent } from '@angular/material';
import { Router, NavigationEnd } from '@angular/router';
import { LolService } from '../lol.service';

@Component({
  selector: 'app-libform',
  templateUrl: './libform.component.html',
  styleUrls: ['./libform.component.css']
})
export class LibformComponent implements OnInit {


  constructor(private lol: LolService, private router: Router, public snackBar: MdSnackBar, private http: Http, private dateAdapter: DateAdapter<Date>, public dialog: MdDialog) {
    dateAdapter.setLocale('de'); // DD.MM.YYYY
  }

  showCate(ai) {
    document.getElementById(ai).style.display = "block";
  }

  hideCate(ai) {
    document.getElementById(ai).style.display = "none";
    this.getcates();
    if (ai == "overlay3") {
      this.getsupp();
    }
  }
  getPamount() {

    this.pamount = this.prate * this.pquantity;
    this.pamount = Math.round(this.pamount);

    this.getSrate();
  }

  getSamount() {

    this.samount = this.srate * this.pquantity;
    this.samount = Math.round(this.samount);
  }
  getSrate() {

    //this.srate=  this.prate + (this.prate)*(this.stax/100);
    //  this.srate=Math.round(this.srate);
    this.getSamount();
  }

  getEPrate() {

    this.eprate = this.prate + (this.prate) * (this.ptax / 100);
    this.eprate = Math.round(this.eprate);
    this.epamount= this.eprate * this.pquantity;
    this.getSamount();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(this.supp + "==" + this.suppid);
        if (this.supp == this.suppid) {
          this.submit();

        }
        else {
          this.openSnackBar("Product Selected Is Not From Selected Supplier", "Thanks");

        }


      }
      dialogRef = null;
    });


  }
  public grandPurchaseTotal: number = null;
  public grandSellingTotal: number = null;
  public invoiceDetails: any = [];
  public packing: number = 0;
  //public category=[{name:"mens wear",ID:1},{name:"ladies wear",ID:2}];
  public category: any = "";

  public subcategory = [{ name: "Tshirt", ID: 1 }, { name: "Shirt", ID: 2 }];
  public description: string = "";
  public cate: string = "";
  public scate: string = "";
  public dcode: string = "";
  public pquantity: number = 1;
  public prate: number = null;
  public srate: number = null;
  public stax: number = 1;
  public samount: number = null;
  public per: number = null;
  public pamount: number = null;
  public purchasedate: any;
  public apiurl: string = "";
  public resp: string = "";
  public message: string = "";
  public suppliers: string = "";
  public supp: number = null;
  public invoiceNo: number = null;
  public invoicedate: number = null;
  public products: any = "";
  public search: any = "";
  public prod: any = "";
  public prodid: number = null;
  public barcode: any = "";
  public suppid: number = null;
  public ptax: number = null;
  public eprate: number = null;
  public epamount:number=null;
  ngOnInit() {
    if (!this.lol.getLol()) {

      this.router.navigateByUrl('/login');

    }
    this.apiurl = "http://" + window.location.hostname + ":" + window.location.port + "/";
    this.apiurl = this.apiurl + "connect/";
    this.apiurl = "http://localhost/inventory/";
    this.getsupp();
    this.getcates();

    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    this.purchasedate = d;
  }

  searchProd() {
    console.log(name);
    this.http.get(this.apiurl + 'searchproduct.php?search=' + this.prod + '&suppid=' + this.supp).subscribe(
      (res: Response) => { //const abc = res.json();
        this.products = res.json();
      })
  }
  onenter() {
    let key, key1;
    for (key in this.products) {
      for (key1 in key) {
        if (this.products[key]['name'] == this.prod) {
          console.log(this.products[key]['name'] + this.products[key]['barcode'] + this.products[key]['code'] + this.products[key]['subcategory'] + this.products[key]['category']);
          this.cate = this.products[key]['subcategory'];
          this.scate = this.products[key]['category'];
          this.dcode = this.products[key]['code'];
          this.description = this.products[key]['name'];
          this.prodid = this.products[key]['prodid'];
          this.srate = this.products[key]['srp'];
          this.prate = this.products[key]['prp'];
          this.eprate = this.products[key]['eprp'];
          this.epamount = this.products[key]['epamt'];
          this.barcode = this.products[key]['barcode'];
          this.suppid = this.products[key]['company'];

          this.getPamount();
          this.getSrate();
          this.getSamount();
        }

      }
    }
    console.log("uyy" + this.prod);
  }
  getsupp() {
    this.http.get(this.apiurl + 'getSupplier.php').subscribe(
      (res: Response) => { //const abc = res.json();
        this.suppliers = res.json();
      })
  }
  getcates() {

    this.http.get(this.apiurl + 'getCategory.php').subscribe(
      (res: Response) => { //const abc = res.json();
        this.category = res.json();
      })
  }

  oncate() {
    this.http.get(this.apiurl + 'getsubcategory.php?category=' + this.cate).subscribe(
      (res: Response) => { //const abc = res.json();
        this.subcategory = res.json();
      })
  }

  subm(x) {

    var d = new Date(x);
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var fulldate = year + "-" + month + "-" + date;
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  makeJson() {
    var d = new Date(this.purchasedate);
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var fulldate = year + "-" + month + "-" + date;
    var addit = false;

    var key, key1;
    for (key in this.invoiceDetails) {
      for (key1 in key) {
        if (this.invoiceDetails[key]['code'] == this.dcode) {
          addit = true;
        }
        else {
        }
      }
    }

    if ((this.eprate != null) && (this.dcode != null) && (this.invoiceNo != null) && (this.description != "") && (this.pquantity != null) && (this.prate != null) && (this.supp != null) && (this.pamount != null) && (this.samount != null) && (this.srate != null) && (this.stax != null) && (this.purchasedate != "")) {
      addit = false;
    } else {
      addit = true;
      this.openSnackBar("Enter All Required Details", "");
    }
    if (addit == false) {
      //   var str="{'code':'"+this.dcode+"',invoiceNo:'"+this.invoiceNo+"',description:'"+this.description+"',pquantity:'"+this.pquantity+"',prate:'"+this.prate+"',sid:'"+this.supp+"',pamount:'"+this.pamount+"',samount:'"+this.samount+"',srate:'"+this.srate+"',stax:'"+this.stax+"',purchasedate:'"+fulldate+"',cate:'"+this.cate+"',scate:'"+this.scate+"'}";
      this.invoiceDetails.push({ "dcode": this.dcode, "invoiceNo": this.invoiceNo, "description": this.description, "pquantity": this.pquantity, "prate": this.prate, "eprate": this.eprate,  "epamount": this.epamount,"sid": this.supp, "pamount": this.pamount, "samount": this.samount, "srate": this.srate, "ptax": this.ptax, "stax": this.stax, "purchasedate": fulldate, "cate": this.cate, "scate": this.scate });
      this.grandPurchaseTotal = this.grandPurchaseTotal + this.pamount;
      this.grandSellingTotal = this.grandSellingTotal + this.samount;
      this.description = "";
      this.pquantity = null;
      this.prate = null;
      this.eprate = null;
      this.srate = null;
      this.stax = 0;
      this.pamount = null;
      this.samount = null;
      this.dcode = null;
    }
    var key, key1;
    for (key in this.invoiceDetails) {
      console.log(this.apiurl + 'libform.php?description=' + this.invoiceDetails[key]['description'] +
        "&dcode=" + this.invoiceDetails[key]['dcode'] + "&pquantity=" + this.invoiceDetails[key]['pquantity'] +
        "&prate=" + this.invoiceDetails[key]['prate'] +"&ptax=" + this.invoiceDetails[key]['ptax'] + "&eprate=" + this.invoiceDetails[key]['eprate']  + "&epamount=" + this.invoiceDetails[key]['epamount'] + "&sid=" + this.supp +
        "&pamount=" + this.invoiceDetails[key]['pamount'] + "&purchasedate=" + fulldate + "&invoiceNo=" + this.invoiceDetails[key]['invoiceNo'] + "&stax=" + this.invoiceDetails[key]['stax'] + "&stax=" + this.invoiceDetails[key]['srate'] + "&samount=" + this.invoiceDetails[key]['samount'] + "&cate=" + this.invoiceDetails[key]['cate'] + "&scate=" + this.invoiceDetails[key]['scate']);
    }
  }
  done() {
    console.log(this.supp + "==" + this.suppid);
    if (this.supp == this.suppid) {
      this.submit();
      var key, pid, pidv;
      var d = new Date(this.purchasedate);
      var date = d.getDate();
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var fulldate = year + "-" + month + "-" + date;
      this.grandPurchaseTotal = this.grandPurchaseTotal + this.packing;
      this.http.get(this.apiurl + 'purchaseinvoice.php?grandSellingTotal=' + this.grandSellingTotal + "&grandPurchaseTotal=" + this.grandPurchaseTotal + "&invoiceNo=" + this.invoiceNo + "&invoicedate=" + fulldate + "&SID=" + this.supp).subscribe(
        (res: Response) => { //const abc = res.json();
          pid = res.json();
          pidv = pid[0]['PID'];
          console.log(pidv);

          for (key in this.invoiceDetails) {
            if ((this.invoiceDetails[key]['dcode'] != null) && (this.invoiceDetails[key]['invoiceNo'] != null) && (this.invoiceDetails[key]['description'] != "") && (this.invoiceDetails[key]['pquantity'] != null) && (this.invoiceDetails[key]['prate'] != null) && (this.supp != null) && (this.invoiceDetails[key]['pamount'] != null) && (this.invoiceDetails[key]['samount'] != null) && (this.invoiceDetails[key]['srate'] != null) && (this.invoiceDetails[key]['stax'] != null) && (this.invoiceDetails[key]['purchasedate'] != "")) {

              this.message = "";

              this.http.get(this.apiurl + 'libform.php?pidv=' + pidv + '&description=' + this.invoiceDetails[key]['description'] + "&code=" + this.invoiceDetails[key]['dcode'] + "&pquantity=" + this.invoiceDetails[key]['pquantity'] + "&prate=" + this.invoiceDetails[key]['prate'] + "&eprate=" + this.invoiceDetails[key]['eprate'] + "&epamount=" + this.invoiceDetails[key]['epamount'] + "&sid=" + this.supp + "&pamount=" + this.invoiceDetails[key]['pamount'] + "&purchasedate=" + fulldate + "&invoiceNo=" + this.invoiceDetails[key]['invoiceNo'] + "&stax=" + this.invoiceDetails[key]['stax'] +"&ptax=" + this.invoiceDetails[key]['ptax'] + "&srate=" + this.invoiceDetails[key]['srate'] + "&samount=" + this.invoiceDetails[key]['samount'] + "&cate=" + this.invoiceDetails[key]['cate'] + "&scate=" + this.invoiceDetails[key]['scate'] + "&prodid=" + this.prodid + "&barcode=" + this.barcode).subscribe((res: Response) => { //const abc = res.json();
                this.resp = res.json();
                console.log(this.resp);
                var key;
                for (this.resp in key) {
                  console.log("hmmm" + key);
                }
                if (this.resp[0]['result'] == "true") {

                  this.openSnackBar("Data Entered", "Thanks");

                  this.description = "";
                  this.pquantity = null;
                  this.prate = null;
                  this.eprate = null;
                  this.srate = null;
                  this.stax = 0;
                  this.grandPurchaseTotal = null;
                  this.grandSellingTotal = null;
                  this.pamount = null;
                  this.samount = null;
                  this.dcode = null;
                  this.prod = "";
                  this.barcode = "";
                  this.invoiceDetails = [];
                  setTimeout(function() {
                    this.router.navigate(['enterstock']);
                  }, 2500);
                }
              })

              console.log(this.apiurl + 'libform.php?description=' + this.invoiceDetails[key]['description'] +
                "&dcode=" + this.invoiceDetails[key]['dcode'] + "&pquantity=" + this.invoiceDetails[key]['pquantity'] +
                "&prate=" + this.invoiceDetails[key]['prate'] + "&eprate=" + this.invoiceDetails[key]['eprate'] + "&sid=" + this.supp +
                "&pamount=" + this.invoiceDetails[key]['pamount'] + "&purchasedate=" + fulldate + "&invoiceNo=" + this.invoiceDetails[key]['invoiceNo'] + "&stax=" + this.invoiceDetails[key]['stax'] + "&stax=" + this.invoiceDetails[key]['srate'] + "&samount=" + this.invoiceDetails[key]['samount'] + "&cate=" + this.invoiceDetails[key]['cate'] + "&scate" + this.invoiceDetails[key]['scate']);


            }
            else {
              console.log("inco");
              console.log(this.apiurl + 'libform.php?description=' + this.invoiceDetails[key]['description'] +
                "&dcode=" + this.invoiceDetails[key]['dcode'] + "&pquantity=" + this.invoiceDetails[key]['pquantity'] +
                "&prate=" + this.invoiceDetails[key]['prate'] + "&sid=" + this.supp +
                "&pamount=" + this.invoiceDetails[key]['pamount'] + "&purchasedate=" + fulldate + "&invoiceNo=" + this.invoiceDetails[key]['invoiceNo'] + "&stax=" + this.invoiceDetails[key]['stax'] + "&stax=" + this.invoiceDetails[key]['srate'] + "&samount=" + this.invoiceDetails[key]['samount'] + "&cate=" + this.invoiceDetails[key]['cate'] + "&scate" + this.invoiceDetails[key]['scate']);


            }
          }
        })

    }
    else {
      this.openSnackBar("Product Selected Is Not From Selected Supplier", "Thanks");

    }
  }

  //http://localhost/inventory/libform.php?pidv=40&description=Top&code=PRI1A&pquantity=1&prate=700&eprate=742&epamount=742&sid=7&pamount=700&purchasedate=2018-1-1&invoiceNo=45667&stax=1&ptax=6&srate=1000&samount=1000&cate=Top&scate=Ladies%20Wear&prodid=27&barcode=SE13163
  submit() {


    var d = new Date(this.purchasedate);
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var fulldate = year + "-" + month + "-" + date;
    if ((this.dcode != null) && (this.invoiceNo != null) && (this.description != "") && (this.pquantity != null) && (this.prate != null) && (this.supp != null) && (this.pamount != null) && (this.samount != null) && (this.srate != null) && (this.stax != null) && (this.purchasedate != "")) {
      this.message = "";
      this.http.get(this.apiurl + 'libform.php?description=' + this.description + "$dcode=" + this.dcode + "&pquantity=" + this.pquantity + "&prate=" + this.prate + "&sid=" + this.supp + "&pamount=" + this.pamount + "&purchasedate=" + fulldate + "&invoiceNo=" + this.invoiceNo + "&stax=" + this.stax + "&stax=" + this.srate + "&samount=" + this.samount + "&cate=" + this.cate + "&scate" + this.scate + "&prodid=" + this.prodid+ "&eprate=" + this.eprate).subscribe(
        (res: Response) => { //const abc = res.json();
          this.resp = res.json();
          console.log(this.resp);
          var key;
          for (this.resp in key) {
            console.log("hmmm" + key);
          }
          if (this.resp[0]['result'] == "true") {

            this.openSnackBar("Data Entered", "Thanks");

            this.description = "";
            this.pquantity = null;
            this.prate = null;
            this.invoiceNo = null;
            this.pamount = null;
            this.eprate=null;
            this.epamount=null;
            this.prod=null;
            this.ptax=null;
          }
        })
    } else {
      console.log('libform.php?description=' + this.description + "&quantity=" + this.pquantity + "&rate=" + this.prate + "&sid=" + this.supp + "&amount=" + this.pamount + "&purchasedate=" + fulldate + "&invoiceNo=" + this.invoiceNo);
      this.message = "Please enter all values";
      this.openSnackBar(this.message, "");
    }

  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MdDialogRef<DialogOverviewExampleDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
