import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AdminService } from '../../../admin.service';
import { Payment } from '../../../models/payment';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  displayedColumns: string[] = ['orderId', 'addressId', 'total', 'paymentMethod', 'action'];
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,
    public adminService:AdminService, private activatedRoute:ActivatedRoute){}
    ngOnInit(){
      this.getPayment()
    }
  paymentForm = this.fb.group({

    orderId: ['',[Validators.required]],
    addressId: ['',[Validators.required]],
    total: ['',[Validators.required]],
    paymentMethod: ['',[Validators.required]]
    
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
    let data = {
      orderId : this.paymentForm.get("orderId")?.value,
      addressId : this.paymentForm.get("addressId")?.value,
      total : this.paymentForm.get("total")?.value,
      paymentMethod : this.paymentForm.get("paymentMethod")?.value }

      this.adminService.addPayment(data).subscribe((res)=>{
      console.log(res)
       this._snackbar.open("Payment added successfully...","" ,{duration:3000})
      this.clearControls()

    },(error=>{
      console.log(error)
      alert(error)
    }))
    // const id = this.activatedRoute.snapshot.paramMap.get('id')
    // this.adminService.updateOrder(id).subscribe((res)=>{
    //   console.log(res)

    // },(error=>{
    //   console.log(error)
    //   alert(error)
    // }))
  }
  clearControls(){
    this.getPayment()
  }

  onCancelClick(){

  }
}
