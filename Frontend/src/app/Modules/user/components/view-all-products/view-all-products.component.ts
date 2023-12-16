import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Modules/admin/admin.service';
import { Product } from 'src/app/Modules/admin/models/product';
import { UserService } from '../../user.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.scss']
})
export class ViewAllProductsComponent {
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,public router: Router,
    // @Inject(MAT_DIALOG_DATA) public data: any, 
    public adminService:AdminService, public userService:UserService){}
     ngOnInit(){
       this.getProduct()
       this.getCart()
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
      this.router.navigateByUrl('user/viewproduct/'+id)
      console.log('hi')
   }

   cart: Cart []=[]

   getCart(){
    this.userService.getCart().subscribe((res)=>{
      this.cart = res;
      console.log(this.cart);
    })
  }
   addToCart(id:Number){
    console.log(id)
    let data = {
      productId : id,
      quantity : 1,
      userId : 1
    }
    let cartItem = this.cart.find(cart => cart.productId === data.productId);

    if (cartItem) {
      console.log("Match found:", cartItem);
      cartItem.quantity += data.quantity;
            //cartItem.price = /* calculate the new price based on your logic */;
      this.userService.updateCart(cartItem).subscribe(
          (res) => {
          console.log(res);
            this._snackbar.open("Cart updated successfully...", "", { duration: 3000 });
        },
      (error) => {
                  console.log(error);
                  alert(error);
              }
      );
          }   
    else {
      console.log("No match found");
      this.userService.addCart(data).subscribe((res)=>{
        console.log(res)
         this._snackbar.open("Product added to cart successfully...","" ,{duration:3000})
        },(error=>{
          console.log(error)
          alert(error)
      }))
  }
  
    
   }
}
