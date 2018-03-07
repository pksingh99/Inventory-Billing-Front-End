import {Routes, RouterModule} from "@angular/router";
import { ShowBillsComponent } from './show-bills/show-bills.component';
import { MakeBillComponent } from './make-bill/make-bill.component';
import { SupplierComponent,DialogOverviewExampleDialog1 } from './supplier/supplier.component';
import { EmployeeComponent } from './employee/employee.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { Barcode2Component } from './barcode2/barcode2.component';

import { ShowStockComponent } from './show-stock/show-stock.component';
import { LibformComponent,DialogOverviewExampleDialog } from './libform/libform.component';
import { LoginComponent } from './login/login.component';
import { NewBarcodeComponent } from './new-barcode/new-barcode.component';

const app_route:Routes =[
  {path:'', redirectTo:'/login',pathMatch:'full'},
 {path:'showbills', component:ShowBillsComponent},
 {path:'makebills', component:MakeBillComponent},
 {path:'employee', component:EmployeeComponent},
 {path:'barcode', component:Barcode2Component},
  {path:'enterstock', component:LibformComponent},
    {path:'supplier', component:SupplierComponent},
        {path:'login', component:LoginComponent},
 {path:'showstock', component:ShowStockComponent},
 {path:'goback', component:NewBarcodeComponent}
]

export const routing = RouterModule.forRoot(app_route);
