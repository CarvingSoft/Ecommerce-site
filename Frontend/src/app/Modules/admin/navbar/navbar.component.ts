import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  ngOnInit() {
    this.setCurrentUser()
  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isExpanded : boolean = false;

  constructor(private breakpointObserver: BreakpointObserver,public authService : AuthService,public adminService :AdminService,private router:Router) {}

  usernameNow!: string;
  setCurrentUser(){
    if(localStorage.getItem('token')){
      const token: any = localStorage.getItem('token')
      let user = JSON.parse(token)
      console.log(user)
  this.usernameNow  = user.name
      console.log(this.usernameNow)
      // this._http.setCurrentUser(user)
      let roleid = user.role
      this.adminService.getRoleById(roleid).subscribe((res)=>{
        let role = res.roleName.toLowerCase();
        this.router.navigate([role]);
      })

    }

}
}
