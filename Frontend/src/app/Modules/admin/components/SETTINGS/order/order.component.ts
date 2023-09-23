import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../admin.service';
import { Category } from '../../../models/category';
import { Order } from '../../../models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  displayedColumns: string[] = [ 'paymentId','orderStatus','shippedDate','deliveredDate', 'action'];
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, public adminService:AdminService){}
    ngOnInit(){
      this.getOrder()
    }
  orderForm = this.fb.group({

    paymentId: ['',Validators.required],
    orderStatus: ['',Validators.required],
    shippedDate: ['',Validators.required],
    deliveredDate: ['',Validators.required]
    
  });
  order: Order []=[]
  getOrder(){
    this.adminService.getOrder().subscribe((res)=>{
      this.order = res;
      console.log(this.order);
    })
  }
  onSubmit(){
    console.log(this.orderForm.getRawValue())
    this.adminService.addOrder(this.orderForm.getRawValue()).subscribe((res)=>{
      console.log(res)
       this._snackbar.open("Order added successfully...","" ,{duration:3000})
      this.clearControls()

    },(error=>{
      console.log(error)
      alert(error)
    }))
  }
  clearControls(){
    this.getOrder()
  }

  onCancelClick(){

  }
}
