import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Modules/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart } from '../../../user/models/cart';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent {
  constructor(private adminService:AdminService, private activatedRoute:ActivatedRoute, private userService:UserService, private _snackbar: MatSnackBar){}
  ngOnInit(){
    this.getProductById()
    this.getCart()
  }
  productlist : any
  getProductById(){
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id)
    this.adminService.getProductById(id).subscribe((res)=>{
      console.log(res)
      this.productlist = res
    })
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
