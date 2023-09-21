import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Role } from './models/role';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = 'http://localhost:8000'

  constructor(private _http:HttpClient) { }


  getRoleById(id: string): Observable<Role>{
    return this._http.get<Role>(this.url +'/role/'+id);
  }

}
