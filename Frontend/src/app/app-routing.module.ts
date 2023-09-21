import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',loadChildren:()=>import('./Modules/auth/auth.module').then(x=>x.AuthModule)},
  {path:'admin',loadChildren:()=>import('./Modules/admin/admin.module').then(x=>x.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
