export class HopDong{
    id: number;
    tenHopDong:string;
    tenKhachHang:string;
    tenNhanVien:string;
    tenDichVu:string;
    ngayLamHopDong:string;
    ngayKetThuc:string;
    tongTien:number;
    constructor(id: number, tenHopDong:string,tenKhachHang:string, tenNhanVien:string,tenDichVu:string,ngayLamHopDong:string,ngayKetThuc:string,tongTien:number){
        this.id=id;
        this.tenHopDong=tenHopDong;
        this.tenKhachHang=tenKhachHang;
        this.tenNhanVien=tenNhanVien;
        this.tenDichVu=tenDichVu;
        this.ngayLamHopDong=ngayLamHopDong;
        this.ngayKetThuc=ngayKetThuc;
        this.tongTien=tongTien;
    }
}