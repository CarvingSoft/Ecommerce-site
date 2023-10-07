import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-paymentmethod',
  templateUrl: './paymentmethod.component.html',
  styleUrls: ['./paymentmethod.component.scss']
})
export class PaymentmethodComponent {
  constructor(private userService:UserService, public dialog: MatDialog, private router:Router){}

  orderSuccess(){
    this.router.navigateByUrl('user/orderSuccess');
  }
}
