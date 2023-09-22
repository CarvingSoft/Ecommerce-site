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

@NgModule({
  declarations: [
    UserManageComponent,
    NavbarComponent,
    DashboardComponent,
    SettingsComponent,
    ProductComponent,
    UomComponent,

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
