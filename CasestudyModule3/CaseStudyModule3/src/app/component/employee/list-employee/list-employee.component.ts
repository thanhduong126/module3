import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/Employee';
import { EmployeeService } from './../../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employee: Employee[]=[];
  // subscription:Subscription;  
  p: number = 1
  constructor(private employeeService: EmployeeService, private router: Router) { }
  id: number;
  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe(data => {
      this.employee = data;
    });
  }
  detailEmployee(id: number) {
    this.router.navigateByUrl("/detailEmployee/" + id)
  }
  create() {
    this.router.navigateByUrl("/createEmployee")
  }

  deleteEmployee = function (id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data =>
      this.employeeService.getAllEmployee().subscribe(data => {
        this.employee = data;
        console.log(this.employee)
      })
    )
  }

}
