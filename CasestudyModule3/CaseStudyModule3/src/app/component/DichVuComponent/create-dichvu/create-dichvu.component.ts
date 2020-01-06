import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DichvuService } from './../../service/dichvu.service';
import { Router } from '@angular/router';
import { Dichvu } from '../../model/Dichvu';

@Component({
  selector: 'app-create-dichvu',
  templateUrl: './create-dichvu.component.html',
  styleUrls: ['./create-dichvu.component.css']
})
export class CreateDichvuComponent implements OnInit {
  Contact: FormGroup;
  constructor(private dichvuService: DichvuService, private router: Router, private fb:FormBuilder) { }
  
  ngOnInit() {
    this.Contact = this.fb.group({
      id: [''],
      tenDichVu: [''],
      dienTich: [''],
      soTang: [''],
      soNguoiToiDa: [''],
      chiPhiThue: [''],
      trangThai: [''],
    }
    )
  }

  addNewDichVu(dichvuObj) {
    if(this.Contact.valid) {
      this.dichvuService.createDichVu(new Dichvu(dichvuObj.id,dichvuObj.tenDichVu,dichvuObj.dienTich,dichvuObj.soTang,dichvuObj.soNguoiToiDa,dichvuObj.chiPhiThue,dichvuObj.trangThai)).subscribe(data => {
        this.router.navigateByUrl("/listDichVu")
      });
    }
   
  }
}
