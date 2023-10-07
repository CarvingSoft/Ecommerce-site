import { Component } from '@angular/core';
import { User } from 'src/app/Modules/admin/models/user';
import { UserService } from '../../user.service';
import { Cart } from '../../models/cart';
import { MatDialog } from '@angular/material/dialog';
import { AddressComponent } from '../address/address.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Modules/auth/auth.service';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent {
  orderTotal!: number;

  constructor(private userService:UserService, public dialog: MatDialog, private router:Router ,private authService:AuthService){}
  
  displayedColumns: string[] = [ 'productId','description','price','file_url','quantity', 'action'];
  ngOnInit(){
    this.viewCart()
  }
  parsePrice(priceString: string): number {
    // Use parseFloat or parseInt based on your data format
    return parseFloat(priceString);
  }
  
  calculateTotal(): number {
    let total = 0;
    for (const item of this.cartList) {
      if (item.product && typeof item.product.price === 'number' && typeof item.quantity === 'number') {
        total += (item.product.price as number) * (item.quantity as number);
      }
    }
    this.orderTotal = total;
    return total;
  }
  
  

  cartList: Cart []=[]
  viewCart(){
    this.userService.getCart().subscribe((res)=>{
      this.cartList = res;
      console.log(this.cartList);
    })
  }

  manageShippingAddress(){
    console.log(this.orderTotal)
    //this.userService.updateOrder(this.orderTotal)
    if (this.authService.isLoggedIn()) {
      //return true; // User is logged in, allow access.
      this.router.navigateByUrl('user/addressForm');
    } else {
      this.router.navigateByUrl('user/login');
      //return false; // User is not logged in, redirect to the registration form.
    }
  }
    
    // const dialogRef = this.dialog.open(AddressComponent, {
    //   height: '560px',
    //   width: '900px',
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // })
    
  }

