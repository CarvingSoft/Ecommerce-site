import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserManageComponent } from './user-manage/user-manage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';





const routes: Routes = [

  {path: '', component:NavbarComponent,
  children:[
  {path: 'home', component: DashboardComponent},

   {path: 'user', component: UserManageComponent},


  ]
 }

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
