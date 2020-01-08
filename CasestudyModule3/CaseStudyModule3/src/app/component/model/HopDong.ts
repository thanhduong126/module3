import { Employee } from './Employee';
import { Customer } from 'src/app/component/model/Customer';
import { Dichvu } from 'src/app/component/model/Dichvu';
export class HopDong{
    id: number;
    tenHopDong:string;
    khachHang:Customer;
    nhanVien:Employee;
    dichVu:Dichvu;
    ngayLamHopDong:string;
    ngayKetThuc:string;
    tongTien:number;
    constructor(id: number, tenHopDong:string,khachHang:Customer, nhanVien:Employee,dichVu:Dichvu,ngayLamHopDong:string,ngayKetThuc:string,tongTien:number){
        this.id=id;
        this.tenHopDong=tenHopDong;
        this.khachHang=khachHang;
        this.nhanVien=nhanVien;
        this.dichVu=dichVu;
        this.ngayLamHopDong=ngayLamHopDong;
        this.ngayKetThuc=ngayKetThuc;
        this.tongTien=tongTien;
    }
}