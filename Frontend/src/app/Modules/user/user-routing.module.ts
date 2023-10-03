import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { ViewCategoriesComponent } from './components/view-categories/view-categories.component';
import { ViewAllProductsComponent } from './components/view-all-products/view-all-products.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';

const routes: Routes = [
  {path: '', component:UserNavbarComponent,
children:[
  {path: 'viewCategories', component:ViewCategoriesComponent},
  {path: 'viewAllProducts', component:ViewAllProductsComponent},
  {path: 'viewCart', component:ViewCartComponent}
]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
