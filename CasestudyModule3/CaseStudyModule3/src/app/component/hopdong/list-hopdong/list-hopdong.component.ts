import { Component, OnInit } from '@angular/core';
import { HopDong } from './../../model/HopDong';
import { HopdongService } from './../../service/hopdong.service';
@Component({
  selector: 'app-list-hopdong',
  templateUrl: './list-hopdong.component.html',
  styleUrls: ['./list-hopdong.component.css']
})
export class ListHopdongComponent implements OnInit {
  hopdong: HopDong[] = [];

  constructor(private hopdongService: HopdongService) { }

  ngOnInit() {
    this.hopdongService.getAllHopDong().subscribe(data => {
      this.hopdong = data;
      console.log(this.hopdong);
    });
  }
  deleteHopDong = function (id: number) {
    this.hopdongService.deleteHopDong(id).subscribe(data =>{
        this.hopdongService.getAllHopDong().subscribe(data => {
          this.hopdong = data;
        this.router.navigateByUrl("/listHopDong");
      })}
    )

  }
}
