import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


import { Role } from './models/role';
import { Product } from './models/product';
import { Uom } from './models/uom';
import { Category } from './models/category';
import { Brand } from './models/brand';
import { Stock } from './models/stock';

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
  getCategory(): Observable<Category[]> {
    return this._http.get<Category[]>(this.url + '/category');
  }
  addCategory(data: any) {
    return this._http.post(this.url + '/category', data)
  }
  getBrand(): Observable<Brand[]> {
    return this._http.get<Brand[]>(this.url + '/brand');
  }
  addBrand(data: any) {
    return this._http.post(this.url + '/brand', data)
  }
  getRole(): Observable<Role[]> {
    return this._http.get<Role[]>(this.url + '/role');
  }
  addRole(data: any) {
    return this._http.post(this.url + '/role', data)
  }
  getStock(): Observable<Stock[]> {
    return this._http.get<Stock[]>(this.url + '/stock');
  }
  addStock(data: any) {
    return this._http.post(this.url + '/stock', data)
  }
  uploadImage(file: Blob): Observable<any> {
    if (file instanceof File) {
      const formData = new FormData();
      formData.append("file", file, file.name);
      return this._http.post(this.url + '/product/fileupload', formData);
    } else {
      
      return throwError("Invalid file type");
    }
  }
}
