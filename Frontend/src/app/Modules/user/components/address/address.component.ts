import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../admin/admin.service';
import { Address } from '../../models/address';
import { Observable } from 'rxjs';
import { User } from '../../../admin/models/user';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  displayedColumns: string[] = [ 'userId', 'addressLine1', 'addressLine2', 'city', 'state', 'zipcode', 'country', 'action'];
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,
     public adminService:AdminService, public userService:UserService, private router:Router){}

    userAddress: Address | null = null;
    ngOnInit(){
      this.setCurrentUser()
      this.getUser()
      this.userService.getAddress()
      
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
  selectedAddress: string = '';

  getRadioValue(address: any): string {
    return `${address.addressLine1},${address.addressLine2}, ${address.city},${address.state}, ${address.zipcode}, ${address.country}`;
  }
  
  getAddress(){
    this.userService.getAddress().subscribe((res)=>{
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
    let data = {
      userId : this.addressForm.get("userId")?.value,
      addressLine1 : this.addressForm.get("addressLine1")?.value,
      addressLine2 : this.addressForm.get("addressLine2")?.value,
      city: this.addressForm.get("city")?.value,
      state: this.addressForm.get("state")?.value,
      zipcode: this.addressForm.get("zipcode")?.value,
      country: this.addressForm.get("country")?.value 
    }
    this.userService.addAddress(data).subscribe((res)=>{
      console.log(res)
       this._snackbar.open("Address added successfully...","" ,{duration:3000})
      this.clearControls()

    },(error=>{
      console.log(error)
      alert(error)
    }))
  }
  clearControls(){
    this.userService.getAddress()
  }

  onCancelClick(){

  }

  managePayment(){
    this.router.navigateByUrl('user/paymentMethod');
  }

  usernameNow!: string;
  setCurrentUser(){
    if(localStorage.getItem('token')){
      const token: any = localStorage.getItem('token')
      let user = JSON.parse(token)
      console.log(user)
      let userid = user.userToken.id
      this.userService.getAddressByUserId(userid).subscribe((res)=>{
        this.userAddress = res;
        //let user = res.name.toLowerCase();
        console.log(res)
        //this.router.navigate([role]);
      })

    }

}
}
