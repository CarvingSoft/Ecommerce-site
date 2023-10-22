import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './models/cart';
import { Address } from './models/address';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8000'

  constructor(private _http:HttpClient) { }

  getCart(): Observable<Cart[]> {
      return this._http.get<Cart[]>(this.url + '/cart');
    }

    addCart(data: any) {
      return this._http.post(this.url + '/cart', data)
    }

    updateCart(cartItem: Cart): Observable<any> {
      // Assuming you are making a PUT request to update the cart item.
      const url = `${this.url}/cart/${cartItem.id}`;
      
      // You can customize the data you want to send to the server to update the cart item.
      const updatedCartItemData = {
          quantity: cartItem.quantity, // Update the quantity
          // Other properties to update
      };

      return this._http.patch(url, updatedCartItemData);
  }

    getAddress(): Observable<Address[]> {
      return this._http.get<Address[]>(this.url + '/address');
    }
    addAddress(data: any) {
      return this._http.post(this.url + '/address', data)
    }
    getAddressById(id: number): Observable<Address>{
      return this._http.get<Address>(this.url +'/address/'+id);
    }

    getAddressByUserId(id: number): Observable<Address>{
      return this._http.get<Address>(this.url +'/address/getAddressByUserId/'+id);
    }
    
    // updateOrder(total: Number){
    //   //console.log('Total value:', total);
    //   const body = { 
    //     orderDate: new Date(),
    //     total: total,
    //     orderStatus: "Order Initiated" };
    //     console.log(body)
    //   this._http.post(this.url + '/order', body).subscribe(
    //     (response) => {
    //       console.log('Response from server:', response);
    //     },
    //     (error) => {
    //       console.error('Error from server:', error);
    //     }
    //   );
    // }

  // getRoleById(id: string): Observable<Role>{
  //   return this._http.get<Role>(this.url +'/role/'+id);
  // }
  // addProduct(data: any) {
  //   return this._http.post(this.url + '/product', data)
  // }
  // getProduct(): Observable<Product[]> {
  //   return this._http.get<Product[]>(this.url + '/product');
  // }

  
  }