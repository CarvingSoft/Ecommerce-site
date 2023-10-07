import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Modules/admin/admin.service';
import { Brand } from 'src/app/Modules/admin/models/brand';

@Component({
  selector: 'app-view-brands',
  templateUrl: './view-brands.component.html',
  styleUrls: ['./view-brands.component.scss']
})
export class ViewBrandsComponent {
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,public router: Router,
    // @Inject(MAT_DIALOG_DATA) public data: any, 
    public adminService:AdminService){}
     ngOnInit(){
       this.getBrand()
     }
    brand: Brand []=[]
   getBrand(){
     this.adminService.getBrand().subscribe((res)=>{
       this.brand = res;
       console.log(this.brand);
     })
   }
   viewBrand(id:Number){
      console.log(id)
      this.router.navigateByUrl('admin/viewBrand/'+id)
 
   }
}
