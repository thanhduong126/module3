import { Component, OnInit } from '@angular/core';
import { Dichvu } from 'src/app/component/model/Dichvu';
import { DichvuService } from './../service/dichvu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dichvu',
  templateUrl: './dichvu.component.html',
  styleUrls: ['./dichvu.component.css']
})
export class DichvuComponent implements OnInit {
  dichvu: Dichvu[]=[];
  constructor(private dichvuService: DichvuService, private router: Router) { }

  ngOnInit() {
    this.dichvuService.getAllDichVu().subscribe(data => {
      this.dichvu = data;
    });
  }
}
