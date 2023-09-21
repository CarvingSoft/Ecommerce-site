import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserManageComponent } from './user-manage/user-manage.component';
import { NavbarComponent } from './components/HOME/navbar/navbar.component';
import { DashboardComponent } from './components/HOME/dashboard/dashboard.component';
import { SettingsComponent } from './components/SETTINGS/settings/settings.component';





const routes: Routes = [

  {path: '', component:NavbarComponent,
  children:[
  {path: 'home', component: DashboardComponent},

   {path: 'user', component: UserManageComponent},
    {path: 'settings', component: SettingsComponent}

  ]
 }

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
