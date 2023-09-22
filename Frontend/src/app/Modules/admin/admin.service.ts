import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Role } from './models/role';
import { Product } from './models/product';
import { Uom } from './models/uom';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = 'http://localhost:8000'

  constructor(private _http:HttpClient) { }


  getRoleById(id: string): Observable<Role>{
    return this._http.get<Role>(this.url +'/role/'+id);
  }
  addProduct(data: any) {
    return this._http.post(this.url + '/product', data)
  }
  getProduct(): Observable<Product[]> {
    return this._http.get<Product[]>(this.url + '/product');
  }
  getUom(): Observable<Uom[]> {
    return this._http.get<Uom[]>(this.url + '/uom');
  }
  addUom(data: any) {
    return this._http.post(this.url + '/uom', data)
  }

}
