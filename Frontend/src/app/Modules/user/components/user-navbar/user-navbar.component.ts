import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';
import { AdminService } from 'src/app/Modules/admin/admin.service';
import { AuthService } from 'src/app/Modules/auth/auth.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent {
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
      let roleid = user.userToken.roleId
      this.adminService.getRoleById(roleid).subscribe((res)=>{
        let role = res.roleName.toLowerCase();
        this.router.navigate([role]);
      })

    }

}

goToViewCart(){
  this.router.navigateByUrl('user/viewCart')
}

}
