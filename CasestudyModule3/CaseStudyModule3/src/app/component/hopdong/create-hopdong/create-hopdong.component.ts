import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { DichvuService } from '../../service/dichvu.service';
import { EmployeeService } from '../../service/employee.service';

import { Dichvu } from '../../model/Dichvu';
import { Customer } from '../../model/Customer';
import { Employee } from '../../model/Employee';
import { HopdongService } from '../../service/hopdong.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HopDong } from '../../model/HopDong';


@Component({
  selector: 'app-create-hopdong',
  templateUrl: './create-hopdong.component.html',
  styleUrls: ['./create-hopdong.component.css']
})
export class CreateHopdongComponent implements OnInit {
  hopdong: HopDong[] = [];
  dichvu: Dichvu[] = [];
  customer: Customer[] = [];
  employee: Employee[] = [];
  Contact: FormGroup;
  constructor(private hopdongService: HopdongService,
    private dichvuService: DichvuService,
    private customerService: CustomerService,
    private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.dichvuService.getAllDichVu().subscribe(data1 => {
      this.dichvu = data1;
    });
    this.customerService.getAllCustomer().subscribe(data2 => {
      this.customer = data2;
    });
    this.employeeService.getAllEmployee().subscribe(data3 => {
      this.employee = data3;
    });
    this.Contact = this.fb.group({
      id:[''],
      tenHopDong:[''],
      tenKhachHang:[''],
      tenNhanVien:[''],
      tenDichVu:[''],
      ngayLamHopDong:[''],
      ngayKetThuc:[''],
      tongTien:[''],
    })
  }

  addNewHopDong(hopdongobj){
    if(this.Contact.valid){
      this.hopdongService.createHopDong(new HopDong(hopdongobj.id,
        hopdongobj.tenHopDong,hopdongobj.tenKhachHang,hopdongobj.tenNhanVien,
        hopdongobj.tenDichVu,hopdongobj.ngayLamHopDong,hopdongobj.ngayKetThuc,
        hopdongobj.tongTien)).subscribe(data=>{
          this.router.navigateByUrl("/listHopDong")
        });
    }
  }
}
