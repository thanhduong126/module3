import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HopdongService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/Hopdong';

  getAllHopDong(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createHopDong(obj: any): Observable<any> {
    console.log(obj)
    return this.http.post(this.baseUrl, obj);
  }
  deleteHopDong(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id);
  }
  // updateService(id: number, obj: any): Observable<any> {
  //   return this.http.patch(this.baseUrl+ id, obj);
  // }
  updateHopDong(obj: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${obj.id}`,obj);
  }
  getHopDong(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);
  }
}
