import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DichvuService {

 
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/dichvu';

  getAllDichVu(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createDichVu(obj: any): Observable<any> {
    console.log(obj)
    return this.http.post(this.baseUrl, obj);
  }

  updateDichVu(obj: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${obj.id}`,obj);
  }

  getDichVu(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);
  }
  deleteDichVu(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id);
  }
}
