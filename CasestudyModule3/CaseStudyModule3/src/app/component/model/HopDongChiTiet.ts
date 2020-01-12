import { HopDong } from './HopDong';
export class HopDongChiTiet{
    id:number;
    hopDong:HopDong;
    soLuong:number;

    constructor(id:number,hopDong:HopDong,soLuong:number){
        this.id=id;
        this.hopDong=hopDong;
        this.soLuong=soLuong;
    }
}