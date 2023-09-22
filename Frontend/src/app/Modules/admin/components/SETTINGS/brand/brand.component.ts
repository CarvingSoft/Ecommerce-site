import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../admin.service';
import { Category } from '../../../models/category';
import { Brand } from '../../../models/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {
  displayedColumns: string[] = [ 'brandName', 'action'];
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, public adminService:AdminService){}
    ngOnInit(){
      this.getBrand()
    }
  brandForm = this.fb.group({

    brandName: ['',Validators.required],
    
  });
  brand: Brand []=[]
  getBrand(){
    this.adminService.getBrand().subscribe((res)=>{
      this.brand = res;
      console.log(this.brand);
    })
  }
  onSubmit(){
    console.log(this.brandForm.getRawValue())
    this.adminService.addBrand(this.brandForm.getRawValue()).subscribe((res)=>{
      console.log(res)
       this._snackbar.open("Brand added successfully...","" ,{duration:3000})
      this.clearControls()

    },(error=>{
      console.log(error)
      alert(error)
    }))
  }
  clearControls(){
    this.getBrand()
  }

  onCancelClick(){

  }
}
