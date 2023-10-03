import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './models/cart';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8000'

  constructor(private _http:HttpClient) { }

  getCart(): Observable<Cart[]> {
      return this._http.get<Cart[]>(this.url + '/cart');
    }
  
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
