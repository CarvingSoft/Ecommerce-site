import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent {
  constructor(private adminService:AdminService, private activatedRoute:ActivatedRoute){}
  ngOnInit(){
    this.getProductById()
  }
  productlist : any
  getProductById(){
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id)
    this.adminService.getProductById(id).subscribe((res)=>{
      console.log(res)
      this.productlist = res
    })
  }
}
