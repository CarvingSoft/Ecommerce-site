import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Modules/admin/admin.service';
import { Category } from 'src/app/Modules/admin/models/category';
import { Product } from 'src/app/Modules/admin/models/product';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss']
})
export class ViewCategoriesComponent {
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,public router: Router,
    // @Inject(MAT_DIALOG_DATA) public data: any, 
    public adminService:AdminService){}
     ngOnInit(){
       this.getCategory()
     }
    category: Category []=[]
   getCategory(){
     this.adminService.getCategory().subscribe((res)=>{
       this.category = res;
       console.log(this.category);
     })
   }
   viewCategory(id:Number){
      console.log(id)
      this.router.navigateByUrl('admin/viewCategory/'+id)
 
   }
}
