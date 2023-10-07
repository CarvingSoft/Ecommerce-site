import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, Observable, of, ReplaySubject, tap } from 'rxjs';
import { Role } from '../admin/models/role';
import { User } from './authModels/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8000'

  private readonly token = 'token'
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN'
  private loggedUser: any

  constructor(private _http:HttpClient) { }
  private  currentUserSource = new ReplaySubject<User | null>(1)
  currentUser$ = this.currentUserSource.asObservable();

  login(data: any){
    return this._http.post(this.url + '/login', data)
    .pipe(
      tap((tokens) => this.doLoginUser(data.email, tokens)),
      mapTo(true),
      catchError((error: any) => {
        return of(false)
      })
    )
  }

  private doLoginUser(userName: String, tokens: any){
    this.loggedUser = userName
    this.storeTokens(tokens)
  }

  private storeTokens(tokens: any){
    localStorage.setItem(this.JWT_TOKEN, tokens.token.accessToken)
    localStorage.setItem(this.REFRESH_TOKEN, tokens.token.refreshToken)
    localStorage.setItem('token', JSON.stringify(tokens))
  }

  getJwtToken(){
    return localStorage.getItem(this.JWT_TOKEN);
  }

  isLoggedIn(): boolean{
    let loggedStatus = this.getJwtToken()
    return !!this.getJwtToken();
  }

  logout(){
    // localStorage.clear()
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    localStorage.removeItem("token");
    // return this._http.post(this.url + '/logout', {
    //   'refreshToken': this.getRefreshToken()
    // }).pipe(
    //   tap((tokens) => this.doLogoutUser()),
    //   mapTo(true),
    //   catchError((error: any) => {
    //     alert(error.error)
    //     return of(false)
    //   })
    // )
  }
    getRole():Observable<Role[]>{
      return this._http.get<Role[]>(this.url + '/role')
    }

    registerUser(data : any){
      return this._http.post(this.url + '/user', data)
    }

    getUser():Observable<User[]>{
      return this._http.get<User[]>(this.url + '/user')
    }

}
