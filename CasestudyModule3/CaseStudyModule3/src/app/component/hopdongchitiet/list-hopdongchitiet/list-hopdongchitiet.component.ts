import { Component, OnInit } from '@angular/core';
import { HopDongChiTiet } from './../../model/HopDongChiTiet';
import { HopdongchitietService } from '../../service/hopdongchitiet.service';

@Component({
  selector: 'app-list-hopdongchitiet',
  templateUrl: './list-hopdongchitiet.component.html',
  styleUrls: ['./list-hopdongchitiet.component.css']
})
export class ListHopdongchitietComponent implements OnInit {
  hopdongchitiet: HopDongChiTiet[]=[];
  constructor(private hopDongChiTiet:HopdongchitietService) { }

  ngOnInit() {
    this.hopDongChiTiet.getAllHopDongChiTiet().subscribe(data=>{
      this.hopdongchitiet=data;
    });
  }
  deleteHopDongChiTiet = function (id: number) {
    this.hopdongchitiet.deleteHopDongChiTiet(id).subscribe(data =>{
        this.hopdongchitiet.getAllHopDongChiTiet().subscribe(data => {
          this.hopdongchitiet = data;
        this.router.navigateByUrl("/listHopDongChiTiet");
        
      })}
    )
  }
}
