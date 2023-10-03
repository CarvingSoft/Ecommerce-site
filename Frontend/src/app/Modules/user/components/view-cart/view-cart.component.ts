import { Component } from '@angular/core';
import { User } from 'src/app/Modules/admin/models/user';
import { UserService } from '../../user.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent {

  constructor(private userService:UserService){}
  displayedColumns: string[] = [ 'productId','description','price','file_url', 'action'];
  
  ngOnInit(){
    this.viewCart()
  }
  cartList: Cart []=[]
  viewCart(){
    this.userService.getCart().subscribe((res)=>{
      this.cartList = res;
      console.log(this.cartList);
    })
  }
}
