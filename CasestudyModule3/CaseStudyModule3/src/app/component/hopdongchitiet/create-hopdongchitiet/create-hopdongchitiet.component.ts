import { Component, OnInit } from '@angular/core';
import { HopDongChiTiet } from './../../model/HopDongChiTiet';
import { HopDong } from '../../model/HopDong';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HopdongchitietService } from './../../service/hopdongchitiet.service';
import { HopdongService } from './../../service/hopdong.service';

@Component({
  selector: 'app-create-hopdongchitiet',
  templateUrl: './create-hopdongchitiet.component.html',
  styleUrls: ['./create-hopdongchitiet.component.css']
})
export class CreateHopdongchitietComponent implements OnInit {
  hopdongchitiet: HopDongChiTiet[] = [];
  hopdong: HopDong[] = [];
  Contact: FormGroup;
  constructor(private hopDongChiTiet: HopdongchitietService,
    private hopDong: HopdongService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.hopDongChiTiet.getAllHopDongChiTiet().subscribe(data => {
      this.hopdongchitiet = data;
    });
    this.hopDong.getAllHopDong().subscribe(data1 => {
      this.hopdong = data1;
    });
    this.Contact = this.fb.group(
      {
        id: [''],
        hopDong: [''],
        soLuong: [''],
      }
    )
  }

  addNewHopDongChiTiet(hopdongchitietobj) {
    if (this.Contact.valid) {
      this.hopDongChiTiet.createHopDongChiTiet(new HopDongChiTiet(hopdongchitietobj.id, hopdongchitietobj.hopDong, hopdongchitietobj.soLuong)).subscribe(data => {
        this.router.navigateByUrl("/listHopDongChiTiet")
      });
    }
  }
}
