import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../admin.service';
import { Address } from '../../../models/address';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  displayedColumns: string[] = [ 'userId', 'addressLine1', 'addressLine2', 'city', 'state', 'zipcode', 'country', 'action'];
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, public adminService:AdminService){}
    ngOnInit(){
      this.getAddress()
      this.getUser()
    }
  addressForm = this.fb.group({

    userId: ['',Validators.required],
    addressLine1: ['',Validators.required],
    addressLine2: ['',Validators.required],
    city: ['',Validators.required],
    state: ['',Validators.required],
    zipcode: ['',Validators.required],
    country: ['',Validators.required]
    
  });
  address: Address []=[]
  getAddress(){
    this.adminService.getAddress().subscribe((res)=>{
      this.address = res;
      console.log(this.address);
    })
  }
  user$! : Observable<User[]>
      getUser(){
        this.user$ = this.adminService.getUser()
        console.log(this.user$)
      }
  onSubmit(){
    console.log(this.addressForm.getRawValue())
    this.adminService.addAddress(this.addressForm.getRawValue()).subscribe((res)=>{
      console.log(res)
       this._snackbar.open("Address added successfully...","" ,{duration:3000})
      this.clearControls()

    },(error=>{
      console.log(error)
      alert(error)
    }))
  }
  clearControls(){
    this.getAddress()
  }

  onCancelClick(){

  }
}
