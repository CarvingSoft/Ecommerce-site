import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { ViewCategoriesComponent } from './components/view-categories/view-categories.component';
import { ViewAllProductsComponent } from './components/view-all-products/view-all-products.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { AddressComponent } from './components/address/address.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { PaymentComponent } from '../admin/components/SETTINGS/payment/payment.component';
import { ViewBrandsComponent } from './components/view-brands/view-brands.component';
import { OrderComponent } from '../admin/components/SETTINGS/order/order.component';

const routes: Routes = [
  
  {path: '', component:UserNavbarComponent,
children:[
  {path: 'viewCategories', component:ViewCategoriesComponent},
  {path: 'viewAllProducts', component:ViewAllProductsComponent},
  {path: 'viewCart', component:ViewCartComponent},
  {path: 'addressForm', component:AddressComponent},
  {path: 'registerForm', component: RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'getAddressByUserId/:id',component:AddressComponent},
  {path:'payment',component:PaymentComponent},
  {path: 'viewBrands', component:ViewBrandsComponent},
  {path:'order',component:OrderComponent}
]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
