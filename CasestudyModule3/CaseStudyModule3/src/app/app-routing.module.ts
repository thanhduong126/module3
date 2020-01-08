import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import { CustomerDetailComponent } from './component/customer/customer-detail/customer-detail/customer-detail.component';
import { UpdateCustomerComponent } from './component/customer/update-customer/update-customer.component';
import { ListEmployeeComponent } from './component/employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './component/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './component/employee/update-employee/update-employee.component';
import { DetailEmployeeComponent } from './component/employee/detail-employee/detail-employee.component';
import { DichvuComponent } from './component/DichVuComponent/dichvu/dichvu.component';
import { CreateDichvuComponent } from './component/DichVuComponent/create-dichvu/create-dichvu.component';
import { UpdateDichvuComponent } from './component/DichVuComponent/update-dichvu/update-dichvu.component';
import { ListHopdongComponent } from './component/hopdong/list-hopdong/list-hopdong.component';
import { CreateHopdongComponent } from './component/hopdong/create-hopdong/create-hopdong.component';
import { UpdateHopdongComponent } from './component/hopdong/update-hopdong/update-hopdong.component';
import { ChitietHopdongComponent } from './component/hopdong/chitiet-hopdong/chitiet-hopdong.component';
import { ListHopdongchitietComponent } from './component/hopdongchitiet/list-hopdongchitiet/list-hopdongchitiet.component';
import { CreateHopdongchitietComponent } from './component/hopdongchitiet/create-hopdongchitiet/create-hopdongchitiet.component';
import { UpdateHopdongchitietComponent } from './component/hopdongchitiet/update-hopdongchitiet/update-hopdongchitiet.component';
import { DetailHopdongchitietComponent } from './component/hopdongchitiet/detail-hopdongchitiet/detail-hopdongchitiet.component';


const routes: Routes = [
  //Customer
  {
    path: "list", component: ListCustomerComponent
  },
  {
    path: "Createcustomer", component: CreateCustomerComponent
  },
  {
    path: "detailCustomer/:id", component: CustomerDetailComponent
  },
  {
    path: "updateCustomer/:id", component: UpdateCustomerComponent
  },

  //Employee
  {
    path: "listEmployee", component: ListEmployeeComponent
  },
  {
    path: "CreateEmployee", component: CreateEmployeeComponent
  },
  {
    path: "detailEmployee/:id", component: DetailEmployeeComponent
  },
  {
    path: "updateEmployee/:id", component: UpdateEmployeeComponent
  }, 
  
  //dichvu
  {
    path: "listDichVu", component: DichvuComponent
  },
  {
    path: "CreateDichVu", component: CreateDichvuComponent
  },
  {
    path: "updateDichVu/:id", component: UpdateDichvuComponent
  }, 

  //hopdong
  {
    path: "listHopDong", component: ListHopdongComponent
  },
  {
    path: "createHopDong", component: CreateHopdongComponent
  },
  {
    path: "updateHopDong/:id", component: UpdateHopdongComponent
  }, 
  {
    path: "detailHopDong/:id", component: ChitietHopdongComponent
  }, 

  //hopdongchitiet
  {
    path: "listHopDongChiTiet", component: ListHopdongchitietComponent
  },
  {
    path: "createHopDongChiTiet", component: CreateHopdongchitietComponent
  },
  {
    path: "updateHopDongChiTiet/:id", component: UpdateHopdongchitietComponent
  }, 
  {
    path: "detailHopDongChiTiet/:id", component: DetailHopdongchitietComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
