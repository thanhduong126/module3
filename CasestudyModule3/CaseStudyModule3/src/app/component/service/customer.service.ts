import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/component/model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/customer';

  getAllCustomer(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createCustomer(obj: any): Observable<any> {
    console.log(obj)
    return this.http.post(this.baseUrl, obj);
  }
  deleteService(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id);
  }
  // updateService(id: number, obj: any): Observable<any> {
  //   return this.http.patch(this.baseUrl+ id, obj);
  // }
  updateCustomer(obj: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${obj.id}`,obj);
  }

  getService(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);
  }
}
