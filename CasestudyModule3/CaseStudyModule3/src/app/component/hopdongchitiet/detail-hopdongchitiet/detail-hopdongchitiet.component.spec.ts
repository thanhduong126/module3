import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHopdongchitietComponent } from './detail-hopdongchitiet.component';

describe('DetailHopdongchitietComponent', () => {
  let component: DetailHopdongchitietComponent;
  let fixture: ComponentFixture<DetailHopdongchitietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailHopdongchitietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHopdongchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
