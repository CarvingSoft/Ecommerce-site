import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, public adminService:AdminService){}
  productForm = this.fb.group({

    name: ['',Validators.required],
    //remarks:['',Validators.required]
  });
  onSubmit(){
    console.log(this.productForm.getRawValue())
    this.adminService.addProduct(this.productForm.getRawValue()).subscribe((res)=>{
      console.log(res)
       this._snackbar.open("Product added successfully...","" ,{duration:3000})
      this.clearControls()
    },(error=>{
      console.log(error)
      alert(error)
    }))
  }
  clearControls(){
    
  }

  onCancelClick(){
    
  }
}
