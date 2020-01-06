import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../model/Customer';
import { Subscription } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id: number;
  customer: Customer;
  constructor(private customerService: CustomerService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id)
    this.customerService.getService(this.id).subscribe(data => {
      this.customer = data;
      console.log(this.customer)
    })

    
  }

    updateCustomer = function () {
    this.customerService.updateCustomer(this.customer).subscribe(data=>{
      this.router.navigateByUrl("/list")})
  }

}



  //   updateCustomer = function (id: number) {
  //   this.customerService.updateCustomer().subscribe(data => {
  //     this.customer = data;
  //     console.log(this.customer)
  // })}

