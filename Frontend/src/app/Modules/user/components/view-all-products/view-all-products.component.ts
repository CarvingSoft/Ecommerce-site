import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Modules/admin/admin.service';
import { Product } from 'src/app/Modules/admin/models/product';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.scss']
})
export class ViewAllProductsComponent {
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
   addToCart(id:Number){
    console.log(id)
    // this.router.navigateByUrl('user/addToCart/'+id)
   }
}
