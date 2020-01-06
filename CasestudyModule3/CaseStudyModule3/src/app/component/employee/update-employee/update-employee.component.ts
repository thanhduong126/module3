import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/Employee';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id)
    this.employeeService.getEmployee(this.id).subscribe(data => {
      this.employee = data;
      console.log(this.employee)
    })
  }

    updateEmployee = function () {
    this.employeeService.updateEmployee(this.employee).subscribe(data=>{
      this.router.navigateByUrl("/listEmployee")})
  }
}
