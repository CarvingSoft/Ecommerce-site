import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from 'src/app/Modules/admin/models/role';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder, private router:Router, private authService: AuthService) { }

  registerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    mobile: [''],
    email: [''],
    password: [''],
    roleId: ['']
  })

  //color: ThemePalette = 'accent';
  checked = true;
  disabled = false;

  role$! : Observable<Role[]>
  getRole(){
    this.role$ = this.authService.getRole()
  }

  submit(){
    let data = {
      firstName : this.registerForm.get("firstName")?.value,
      lastName: this.registerForm.get("lastName")?.value,
    mobile: this.registerForm.get("mobile")?.value,
    email: this.registerForm.get("email")?.value,
    password: this.registerForm.get("password")?.value,
    roleId: 2
    }
    this.authService.registerUser(data).subscribe((res)=>{
     console.log(res)
    })
    this.router.navigateByUrl('user/login');
    //this.router.navigateByUrl('user/addressForm');
  }
  

  ngOnInit(): void {
    this.getRole()
  }


}


