import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../admin.service';
import { Product } from '../../../models/product';
import { Observable } from 'rxjs';
import { Brand } from '../../../models/brand';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  displayedColumns: string[] = [ 'name', 'brandId', 'description', 'price', 'categoryId', 'file_url', 'action'];
  constructor(public dialog: MatDialog, private _snackbar: MatSnackBar,private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, public adminService:AdminService){}
    ngOnInit(){
      this.getProduct()
      this.getBrand()
      this.getCategory()
    }
  productForm = this.fb.group({

    name: ['',Validators.required],
    brandId: ['',Validators.required],
    description: ['',Validators.required],
    price: ['',Validators.required],
    categoryId: ['',Validators.required],
    stockId: [''],
    cloudinary_id : [''],
    file_url: ['']
  });
  products: Product []=[]
  getProduct(){
    this.adminService.getProduct().subscribe((res)=>{
      this.products = res;
      console.log(this.products);
    })
  }
  brand$! : Observable<Brand[]>
      getBrand(){
        this.brand$ = this.adminService.getBrand()
        console.log(this.brand$)
      }

  category$! : Observable<Category[]>
    getCategory(){
      this.category$ = this.adminService.getCategory()
      console.log(this.category$)
      }

  onSubmit(){
    let data = {
      name: this.productForm.get('name')?.value,
      brandId: this.productForm.get('brandId')?.value,
      description: this.productForm.get('description')?.value,
      price: this.productForm.get('price')?.value,
      categoryId: this.productForm.get('categoryId')?.value,
      stockId: this.productForm.get('stockId')?.value,
      cloudinary_id: this.productForm.get('cloudinary_id')?.value,
      file_url: this.productForm.get('file_url')?.value
    }
    console.log(this.productForm.getRawValue())
    console.log(data)
    this.adminService.addProduct(data).subscribe((res)=>{
      console.log(res)
       this._snackbar.open("Product added successfully...","" ,{duration:3000})
      this.clearControls()

    },(error=>{
      console.log(error)
      alert(error)
    }))
  }
  clearControls(){
    this.getProduct()
  }

  onCancelClick(){

  }
  uploadStatus = false
  file: any;
  onFileSelected(event: any){
    this.uploadStatus= true
    this.file = event.target.files[0]
  }

  onUpload(){
    this.uploadStatus = false
    this.adminService.uploadImage(this.file).subscribe(res=>{
      this.productForm.patchValue({
        cloudinary_id : res.public_id,
        file_url: res.url
      })
      console.log('uploadresponse'+res)
    })
  }
}
