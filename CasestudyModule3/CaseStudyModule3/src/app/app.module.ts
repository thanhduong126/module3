import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';
import { ListEmployeeComponent } from './component/employee/list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './component/employee/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './component/employee/create-employee/create-employee.component';
import { UpdateCustomerComponent } from './component/customer/update-customer/update-customer.component';
import { CustomerDetailComponent } from './component/customer/customer-detail/customer-detail/customer-detail.component';
import { ErrorsComponent } from './component/error/errors/errors.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailEmployeeComponent } from './component/employee/detail-employee/detail-employee.component';
import { DichvuComponent } from './component/DichVuComponent/dichvu/dichvu.component';
import { CreateDichvuComponent } from './component/DichVuComponent/create-dichvu/create-dichvu.component';
import { UpdateDichvuComponent } from './component/DichVuComponent/update-dichvu/update-dichvu.component';
import { ListHopdongComponent } from './component/hopdong/list-hopdong/list-hopdong.component';
import { CreateHopdongComponent } from './component/hopdong/create-hopdong/create-hopdong.component';
import { ChitietHopdongComponent } from './component/hopdong/chitiet-hopdong/chitiet-hopdong.component';
import { UpdateHopdongComponent } from './component/hopdong/update-hopdong/update-hopdong.component';
import { ListHopdongchitietComponent } from './component/hopdongchitiet/list-hopdongchitiet/list-hopdongchitiet.component';
import { CreateHopdongchitietComponent } from './component/hopdongchitiet/create-hopdongchitiet/create-hopdongchitiet.component';
import { UpdateHopdongchitietComponent } from './component/hopdongchitiet/update-hopdongchitiet/update-hopdongchitiet.component';
import { DetailHopdongchitietComponent } from './component/hopdongchitiet/detail-hopdongchitiet/detail-hopdongchitiet.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    ListEmployeeComponent,
    UpdateEmployeeComponent,
    CreateEmployeeComponent,
    UpdateCustomerComponent,
    CustomerDetailComponent,
    ErrorsComponent,
    DetailEmployeeComponent,
    DichvuComponent,
    CreateDichvuComponent,
    UpdateDichvuComponent,
    ListHopdongComponent,
    CreateHopdongComponent,
    ChitietHopdongComponent,
    UpdateHopdongComponent,
    ListHopdongchitietComponent,
    CreateHopdongchitietComponent,
    UpdateHopdongchitietComponent,
    DetailHopdongchitietComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
