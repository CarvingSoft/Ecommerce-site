import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../admin.service';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';
import { Role } from '../../../models/role';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  displayedColumns: string[] = [ 'firstName', 'lastName', 'mobile', 'email', 'password', 'roleId', 'action'];
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, public adminService:AdminService){}
    ngOnInit(){
      this.getUser()
      this.getRole()
    }
  userForm = this.fb.group({

    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    mobile: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
    roleId: ['',Validators.required]
    
  });
  user: User []=[]
  getUser(){
    this.adminService.getUser().subscribe((res)=>{
      this.user = res;
      console.log(this.user);
    })
  }
  role$! : Observable<Role[]>
      getRole(){
        this.role$ = this.adminService.getRole()
        console.log(this.role$)
      }
  onSubmit(){
    console.log(this.userForm.getRawValue())
    this.adminService.addUser(this.userForm.getRawValue()).subscribe((res)=>{
      console.log(res)
       this._snackbar.open("User added successfully...","" ,{duration:3000})
      this.clearControls()

    },(error=>{
      console.log(error)
      alert(error)
    }))
  }
  clearControls(){
    this.getUser()
  }

  onCancelClick(){

  }
}
