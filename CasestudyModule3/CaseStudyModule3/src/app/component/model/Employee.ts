export class Employee {
    id: number;
    tenNhanVien: string;
    viTri: string;
    trinhDo: string;
    boPhan: string;
    ngaySinh: string;
    soCmnd: string;
    email: string;
    diaChi: string;

    constructor(id: number, tenNhanVien: string, viTri: string, trinhDo: string, boPhan: string, ngaySinh: string, soCmnd: string, email: string, diaChi: string) {
        this.id = id;
        this.tenNhanVien=tenNhanVien;
        this.viTri=viTri;
        this.trinhDo= trinhDo;
        this.boPhan=boPhan;
        this.ngaySinh=ngaySinh;
        this.soCmnd=soCmnd;
        this.email=email;
        this.diaChi=diaChi;
    }



}