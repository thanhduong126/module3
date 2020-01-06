import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/component/model/Customer';
import { CustomerService } from 'src/app/component/service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

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
  // deleteCustomer = function (id: any) {
  //   this.customerService.deleteService(id.id).subscribe();
  // }
  deleteCustomer = function (id: number) {
    this.customerService.deleteService(id).subscribe(data =>
      this.customerService.getAllCustomer().subscribe(data => {
        this.customer = data;
        this.router.navigateByUrl("/list");
        console.log(this.customer);
      })
    )
  }
  updateCustomer(id: number) {
    this.router.navigateByUrl("/updateCustomer/" + id)
  }
}
