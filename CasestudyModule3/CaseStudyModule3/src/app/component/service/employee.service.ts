import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/employee';

  getAllEmployee(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createEmployee(obj: any): Observable<any> {
    console.log(obj)
    return this.http.post(this.baseUrl, obj);
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id);
  }
  updateEmployee(obj: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${obj.id}`, obj);
  }
  getEmployee(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);
  }
}
