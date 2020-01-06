export class Dichvu {
    id: number;
    tenDichVu:string;
    dienTich:number;
    soTang: number;
    soNguoiToiDa:number;
    chiPhiThue:number;
    trangThai:string;
    constructor(id:number,tenDichVu:string,dienTich:number, soTang: number,soNguoiToiDa:number, chiPhiThue:number,trangThai:string) {
            this.id=id;
            this.tenDichVu=tenDichVu;
            this.dienTich=dienTich;
            this.soTang=soTang;
            this.soNguoiToiDa=soNguoiToiDa;
            this.chiPhiThue=chiPhiThue;
            this.trangThai=trangThai;
    }

}