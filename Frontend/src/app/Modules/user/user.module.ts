import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { MaterialModule } from '../material/material.module';
import { ViewCategoriesComponent } from './components/view-categories/view-categories.component';
import { ViewAllProductsComponent } from './components/view-all-products/view-all-products.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { AddressComponent } from './components/address/address.component';
import { ViewBrandsComponent } from './components/view-brands/view-brands.component';


@NgModule({
  declarations: [
    UserNavbarComponent,
    ViewCategoriesComponent,
    ViewAllProductsComponent,
    ViewCartComponent,
    AddressComponent,
    ViewBrandsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
