import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../admin.service';
import { Uom } from '../../../models/uom';

@Component({
  selector: 'app-uom',
  templateUrl: './uom.component.html',
  styleUrls: ['./uom.component.scss']
})
export class UomComponent {
  displayedColumns: string[] = [ 'uomName', 'abbreviation', 'action'];
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, public adminService:AdminService){}
    ngOnInit(){
      this.getUom()
    }
  uomForm = this.fb.group({

    uomName: ['',Validators.required],
    abbreviation: ['',Validators.required],
  });
  uoms: Uom []=[]
  getUom(){
    this.adminService.getUom().subscribe((res)=>{
      this.uoms = res;
      console.log(this.uoms);
    })
  }
  onSubmit(){
    console.log(this.uomForm.getRawValue())
    this.adminService.addUom(this.uomForm.getRawValue()).subscribe((res)=>{
      console.log(res)
       this._snackbar.open("Uom added successfully...","" ,{duration:3000})
      this.clearControls()

    },(error=>{
      console.log(error)
      alert(error)
    }))
  }
  clearControls(){
    this.getUom()
  }

  onCancelClick(){

  }
}
