import {Routes, RouterModule} from "@angular/router";
import { ShowBillsComponent } from './show-bills/show-bills.component';
import { MakeBillComponent } from './make-bill/make-bill.component';
import { PrintBarcodesComponent } from './print-barcodes/print-barcodes.component';
import { SupplierComponent,DialogOverviewExampleDialog1 } from './supplier/supplier.component';
import { EmployeeComponent } from './employee/employee.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { ShowStockComponent } from './show-stock/show-stock.component';
import { LibformComponent,DialogOverviewExampleDialog } from './libform/libform.component';

const app_route:Routes =[
  {path:'', redirectTo:'/makebills',pathMatch:'full'},
 {path:'showbills', component:ShowBillsComponent},
 {path:'makebills', component:MakeBillComponent},
 {path:'printbarcode', component:PrintBarcodesComponent},
 {path:'employee', component:EmployeeComponent},
 {path:'barcode', component:BarcodeComponent},
  {path:'enterstock', component:LibformComponent},
    {path:'supplier', component:SupplierComponent},
 {path:'showstock', component:ShowStockComponent}

]

export const routing = RouterModule.forRoot(app_route);
