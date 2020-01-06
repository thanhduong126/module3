import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../service/employee.service';
import { Employee } from '../../model/Employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  Contact: FormGroup;
  employee: any[];
  constructor(private employeeService: EmployeeService, private router: Router, private fb: FormBuilder) {
  }
  ngOnInit() {
    this.Contact=this.fb.group({
      id: [''],
      tenNhanVien: [''],
      viTri: [''],
      trinhDo: [''],
      boPhan: [''],
      ngaySinh: [''],
      soCmnd: ['',[Validators.required,Validators.pattern('^([0-9]){9}$')]],
      email: [''],
      diaChi: [''],
    })
  }
  addNewEmployee(employeeobj) {
    if(this.Contact.valid) {
      this.employeeService.createEmployee(new Employee(employeeobj.id,employeeobj.tenNhanVien,employeeobj.viTri,employeeobj.trinhDo,
        employeeobj.boPhan,employeeobj.ngaySinh,employeeobj.soCmnd,employeeobj.email,employeeobj.diaChi)).subscribe(data => {
        this.router.navigateByUrl("/listEmployee")
      });
    }}

}
