import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../admin.service';
import { Uom } from '../../../models/uom';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  displayedColumns: string[] = [ 'categoryName', 'action'];
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, public adminService:AdminService){}
    ngOnInit(){
      this.getCategory()
    }
  categoryForm = this.fb.group({

    categoryName: ['',Validators.required],
    
  });
  category: Category []=[]
  getCategory(){
    this.adminService.getCategory().subscribe((res)=>{
      this.category = res;
      console.log(this.category);
    })
  }
  onSubmit(){
    console.log(this.categoryForm.getRawValue())
    this.adminService.addCategory(this.categoryForm.getRawValue()).subscribe((res)=>{
      console.log(res)
       this._snackbar.open("Category added successfully...","" ,{duration:3000})
      this.clearControls()

    },(error=>{
      console.log(error)
      alert(error)
    }))
  }
  clearControls(){
    this.getCategory()
  }

  onCancelClick(){

  }
}
