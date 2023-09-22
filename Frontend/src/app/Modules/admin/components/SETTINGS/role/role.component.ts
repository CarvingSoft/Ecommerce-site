import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../admin.service';
import { Brand } from '../../../models/brand';
import { Role } from '../../../models/role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {
  displayedColumns: string[] = [ 'roleName', 'action'];
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, public adminService:AdminService){}
    ngOnInit(){
      this.getRole()
    }
  roleForm = this.fb.group({

    roleName: ['',Validators.required],
    
  });
  role: Role []=[]
  getRole(){
    this.adminService.getRole().subscribe((res)=>{
      this.role = res;
      console.log(this.role);
    })
  }
  onSubmit(){
    console.log(this.roleForm.getRawValue())
    this.adminService.addRole(this.roleForm.getRawValue()).subscribe((res)=>{
      console.log(res)
       this._snackbar.open("Role added successfully...","" ,{duration:3000})
      this.clearControls()

    },(error=>{
      console.log(error)
      alert(error)
    }))
  }
  clearControls(){
    this.getRole()
  }

  onCancelClick(){

  }
}
