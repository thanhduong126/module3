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
import { DichvuComponent } from './component/dichvu/dichvu/dichvu.component';
import { HopdongComponent } from './component/hopdong/hopdong/hopdong.component';
import { HopdongchitietComponent } from './component/hopdongchitiet/hopdongchitiet/hopdongchitiet.component';

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
    HopdongComponent,
    HopdongchitietComponent,

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
