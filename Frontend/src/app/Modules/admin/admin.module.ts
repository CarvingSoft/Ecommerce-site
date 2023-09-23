import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UserManageComponent } from './user-manage/user-manage.component';

import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './components/HOME/navbar/navbar.component';
import { DashboardComponent } from './components/HOME/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './components/SETTINGS/settings/settings.component';
import { ProductComponent } from './components/SETTINGS/product/product.component';
import { UomComponent } from './components/SETTINGS/uom/uom.component';
import { BrandComponent } from './components/SETTINGS/brand/brand.component';
import { CategoryComponent } from './components/SETTINGS/category/category.component';
import { RoleComponent } from './components/SETTINGS/role/role.component';
import { StockComponent } from './components/SETTINGS/stock/stock.component';
import { OrderComponent } from './components/SETTINGS/order/order.component';
import { UserComponent } from './components/SETTINGS/user/user.component';
import { AddressComponent } from './components/SETTINGS/address/address.component';
import { PaymentComponent } from './components/SETTINGS/payment/payment.component';


@NgModule({
  declarations: [
    UserManageComponent,
    NavbarComponent,
    DashboardComponent,
    SettingsComponent,
    ProductComponent,
    UomComponent,
    BrandComponent,
    CategoryComponent,
    RoleComponent,
    StockComponent,
    OrderComponent,
    UserComponent,
    AddressComponent,
    PaymentComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
