import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdTooltipModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
//import { MaterialModule} from '@angular/material';
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
import { SupplierComponent,DialogOverviewExampleDialog1 } from './supplier/supplier.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowBillsComponent } from './show-bills/show-bills.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { routing } from './app.routing';
import {MatSelectModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatButtonModule,MatSlideToggleModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { NewBarcodeComponent } from './new-barcode/new-barcode.component';
import { LolService } from './lol.service';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { NewsubcategoryComponent } from './newsubcategory/newsubcategory.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ProductsComponent } from './products/products.component';
import {MdAutocompleteModule} from '@angular/material/autocomplete';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    LibformComponent,DialogOverviewExampleDialog,DialogOverviewExampleDialog1,
    ShowStockComponent,
    MakeBillComponent,
    SupplierComponent,
    EmployeeComponent,
    ShowBillsComponent,
    BarcodeComponent,
    LoginComponent,
    NewBarcodeComponent,
    NewcategoryComponent,
    NewsubcategoryComponent,
    ExchangeComponent,
    ProductsComponent

  ],
  imports: [MatSlideToggleModule,MatButtonModule,MatDialogModule,MatCardModule,MatToolbarModule,MatMenuModule,MatSidenavModule,MatSnackBarModule,MatPaginatorModule,MatSelectModule,routing,FormsModule,HttpModule,MdIconModule,MdDatepickerModule,MdNativeDateModule,
    BrowserModule,MdInputModule,BrowserAnimationsModule,MdTooltipModule,MdSidenavModule,NoopAnimationsModule,MdAutocompleteModule,MatAutocompleteModule
  ],
  entryComponents: [DialogOverviewExampleDialog,LibformComponent,DialogOverviewExampleDialog1,SupplierComponent],
  providers: [LolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
