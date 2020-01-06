export class Customer{
    id:number;
    tenKhachHang: string;
    loaiKhachHang: string;
    ngaySinh: string;
    soCmnd: string;
    soDT: string;
    email: string;
    diaChi:string;
    constructor(id:number,tenKhachHang:string,loaiKhachHang:string,ngaySinh:string,soCmnd:string,soDT:string,email:string,diaChi:string){
            this.id=id;
            this.tenKhachHang=tenKhachHang;
            this.loaiKhachHang=loaiKhachHang;
            this.ngaySinh=ngaySinh;
            this.soCmnd=soCmnd;
            this.soDT=soDT;
            this.email=email;
            this.diaChi=diaChi;
    }
    constructor1(){};

}