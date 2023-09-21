import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Modules/admin/admin.service';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private fb:FormBuilder, private router:Router, private authService: AuthService, private adminService: AdminService) { }

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  })

  token : any
  submit(){
    let {email,password}=this.loginForm.getRawValue()
    if(email=="admin@gmail.com"&&password=="123456"){
      this.router.navigate(['/admin']);
      return
    }
    // this.authService.login(this.loginForm.getRawValue()).subscribe((res)=>{
    //   this.token = res
    //   // localStorage.setItem('token', this.token.token)
    //   if(this.token){
    //     this.setCurrentUser()
    //   }
    // })
    //alert("Email or password is in correct")
  }

  setCurrentUser(){
    if(localStorage.getItem('token')){
      const token: any = localStorage.getItem('token')
      let user = JSON.parse(token)
      console.log(user)
      // this._http.setCurrentUser(user)
      let roleid = user.role
      this.adminService.getRoleById(roleid).subscribe((res)=>{
        let role = res.roleName.toLowerCase();
        this.router.navigate([role]);
      })

    }
  }

  ngOnInit(): void {
  }


}


