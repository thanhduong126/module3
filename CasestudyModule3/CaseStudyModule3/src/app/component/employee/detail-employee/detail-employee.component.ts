import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/Employee';
import { EmployeeService } from './../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {

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
  deleteEmployee = function (id: number) {
    if(confirm("Bạn có muốn xóa không!")){
    this.employeeService.deleteEmployee(id).subscribe(data =>
      this.employeeService.getAllEmployee().subscribe(data => {
        this.employee = data;
        this.router.navigateByUrl("/listEmployee");
        console.log(this.employee);
      })
    )
  }
  }
  updateEmployee(id: number) {
    this.router.navigateByUrl("/updateEmployee/" + id)
  }

}
