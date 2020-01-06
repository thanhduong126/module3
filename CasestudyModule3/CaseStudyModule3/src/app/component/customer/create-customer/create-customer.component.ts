import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../model/Customer';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  Contact: FormGroup;
  customer: any[];

  constructor(private customerService: CustomerService, private router: Router, private fb: FormBuilder) {
  }
  ngOnInit() {
    this.Contact = this.fb.group({
      id:[''],
      tenKhachHang:[''],
      loaiKhachHang: [''],
      ngaySinh:['',[Validators.required,Validators.pattern('^((2000|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)$|^(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))$|^(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))$|^(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))$')]],
      soCmnd: ['',[Validators.required,Validators.pattern('^([0-9]){9}$')]],
      soDT: ['',[Validators.required,Validators.pattern('^090([0-9]){7}$')]],
      email: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      diaChi:[''],
    }
    )
  }

  addNewCustomer(customerObj) {
    if(this.Contact.valid) {
      this.customerService.createCustomer(new Customer(customerObj.id, customerObj.tenKhachHang, customerObj.loaiKhachHang, customerObj.ngaySinh, customerObj.soCmnd, customerObj.soDT, customerObj.email, customerObj.diaChi)).subscribe(data => {
        this.router.navigateByUrl("/list")
      });
    }
   

  }

  // onSubmit(){
  //   console.log(this.Contact);
  // }
}
