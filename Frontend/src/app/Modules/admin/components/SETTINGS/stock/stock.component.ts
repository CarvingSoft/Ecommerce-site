import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../admin.service';
import { Role } from '../../../models/role';
import { Stock } from '../../../models/stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent {
  displayedColumns: string[] = [ 'productId', 'quantity', 'unit', 'action'];
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, public adminService:AdminService){}
    ngOnInit(){
      this.getStock()
    }
  stockForm = this.fb.group({

    productId: ['',Validators.required],
    quantity: ['',Validators.required],
    unit: ['',Validators.required]
    
  });
  stock: Stock []=[]
  getStock(){
    this.adminService.getStock().subscribe((res)=>{
      this.stock = res;
      console.log(this.stock);
    })
  }
  onSubmit(){
    console.log(this.stockForm.getRawValue())
    this.adminService.addStock(this.stockForm.getRawValue()).subscribe((res)=>{
      console.log(res)
       this._snackbar.open("Stock added successfully...","" ,{duration:3000})
      this.clearControls()

    },(error=>{
      console.log(error)
      alert(error)
    }))
  }
  clearControls(){
    this.getStock()
  }

  onCancelClick(){

  }
}
