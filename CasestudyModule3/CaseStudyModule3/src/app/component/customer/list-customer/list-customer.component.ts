import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/component/model/Customer';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customer: Customer[]=[];
  // subscription:Subscription;
  
  p: number = 1
  constructor(private customerService: CustomerService, private router: Router) { }
  id: number;

  ngOnInit() {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customer = data;
      
    });
  }
  detailCustomer(id: number) {
    this.router.navigateByUrl("/detailCustomer/" + id)
  }
  create() {
    this.router.navigateByUrl("/createCustomer")
  }

  deleteCustomer = function (id: number) {
    this.customerService.deleteService(id).subscribe(data =>
      this.customerService.getAllCustomer().subscribe(data => {
        this.customer = data;
        console.log(this.customer)
      })
    )
  }


}
