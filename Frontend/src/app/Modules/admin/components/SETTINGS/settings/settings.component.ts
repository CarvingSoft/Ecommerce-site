import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductComponent } from '../product/product.component';
import { UomComponent } from '../uom/uom.component';

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
      height: '560px',
      width: '900px',
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }


  
}
 

