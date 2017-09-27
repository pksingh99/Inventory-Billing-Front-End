import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdTooltipModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import { MaterialModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { LibformComponent,DialogOverviewExampleDialog } from './libform/libform.component';
import {MdInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdIconModule} from '@angular/material';
import { ShowStockComponent } from './show-stock/show-stock.component';
//import { DatepickerModule } from 'angular2-material-datepicker';
import {MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import { MakeBillComponent } from './make-bill/make-bill.component';
import { PrintBarcodesComponent } from './print-barcodes/print-barcodes.component';
import { SupplierComponent,DialogOverviewExampleDialog1 } from './supplier/supplier.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowBillsComponent } from './show-bills/show-bills.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LibformComponent,DialogOverviewExampleDialog,DialogOverviewExampleDialog1,
    ShowStockComponent,
    MakeBillComponent,
    PrintBarcodesComponent,
    SupplierComponent,
    EmployeeComponent,
    ShowBillsComponent,
    BarcodeComponent

  ],
  imports: [routing,FormsModule,HttpModule,MdIconModule,MdDatepickerModule,MdNativeDateModule,
    BrowserModule,MdInputModule,BrowserAnimationsModule,MdTooltipModule,MdSidenavModule,NoopAnimationsModule,MaterialModule
  ],
  entryComponents: [DialogOverviewExampleDialog,LibformComponent,DialogOverviewExampleDialog1,SupplierComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
