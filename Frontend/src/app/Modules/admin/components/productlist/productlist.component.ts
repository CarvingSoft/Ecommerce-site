import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../admin.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,public router: Router,
   // @Inject(MAT_DIALOG_DATA) public data: any, 
   public adminService:AdminService){}
    ngOnInit(){
      this.getProduct()
    }
  products: Product []=[]
  getProduct(){
    this.adminService.getProduct().subscribe((res)=>{
      this.products = res;
      console.log(this.products);
    })
  }
  viewProduct(id:Number){
     console.log(id)
     this.router.navigateByUrl('admin/viewProduct/'+id)

  }
}
