import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HopdongchitietService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/HopDongChiTiet';

  getAllHopDongChiTiet(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createHopDongChiTiet(obj: any): Observable<any> {
    console.log(obj)
    return this.http.post(this.baseUrl, obj);
  }
  deleteHopDongChiTiet(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id);
  }

  updateHopDongChiTiet(obj: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${obj.id}`, obj);
  }
  getHopDongChiTiet(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);
  }


}
