import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AdminService } from '../../../admin.service';
import { Payment } from '../../../models/payment';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  displayedColumns: string[] = ['cartId', 'addressId', 'total', 'paymentMethod', 'date', 'status', 'action'];
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, public adminService:AdminService){}
    ngOnInit(){
      this.getPayment()
    }
  paymentForm = this.fb.group({

    cartId: ['',Validators.required],
    addressId: ['',Validators.required],
    total: ['',Validators.required],
    paymentMethod: ['',Validators.required],
    date: ['',Validators.required],
    status: ['',Validators.required]
    
  });
  payment: Payment []=[]
  getPayment(){
    this.adminService.getPayment().subscribe((res)=>{
      this.payment = res;
      console.log(this.payment);
    })
  }
  
  onSubmit(){
    console.log(this.paymentForm.getRawValue())
    this.adminService.addPayment(this.paymentForm.getRawValue()).subscribe((res)=>{
      console.log(res)
       this._snackbar.open("Payment added successfully...","" ,{duration:3000})
      this.clearControls()

    },(error=>{
      console.log(error)
      alert(error)
    }))
  }
  clearControls(){
    this.getPayment()
  }

  onCancelClick(){

  }
}
