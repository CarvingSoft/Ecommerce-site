import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductComponent } from '../product/product.component';
import { UomComponent } from '../uom/uom.component';
import { BrandComponent } from '../brand/brand.component';
import { CategoryComponent } from '../category/category.component';
import { RoleComponent } from '../role/role.component';
import { StockComponent } from '../stock/stock.component';
import { OrderComponent } from '../order/order.component';
import { UserComponent } from '../user/user.component';
import { AddressComponent } from '../address/address.component';
import { PaymentComponent } from '../payment/payment.component';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  constructor(public dialog: MatDialog) {}
  manageProduct(){
    const dialogRef = this.dialog.open(ProductComponent, {
      height: '760px',
      width: '1000px',
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
  manageUom(){
    const dialogRef = this.dialog.open(UomComponent, {
      height: '360px',
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  manageBrand(){
    const dialogRef = this.dialog.open(BrandComponent, {
      height: '360px',
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  manageCategory(){
    const dialogRef = this.dialog.open(CategoryComponent, {
      height: '560px',
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  } 

  manageRole(){
    const dialogRef = this.dialog.open(RoleComponent, {
      height: '560px',
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  } 

  manageStock(){
    const dialogRef = this.dialog.open(StockComponent, {
      height: '560px',
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  } 
  manageOrder(){
    const dialogRef = this.dialog.open(OrderComponent, {
      height: '560px',
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  } 
  manageUser(){
    const dialogRef = this.dialog.open(UserComponent, {
      height: '560px',
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  } 
  manageAddress(){
    const dialogRef = this.dialog.open(AddressComponent, {
      height: '560px',
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
  managePayment(){
    const dialogRef = this.dialog.open(PaymentComponent, {
      height: '560px',
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
 

