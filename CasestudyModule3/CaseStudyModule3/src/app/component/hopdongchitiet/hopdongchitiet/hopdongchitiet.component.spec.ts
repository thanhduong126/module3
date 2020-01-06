import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HopdongchitietComponent } from './hopdongchitiet.component';

describe('HopdongchitietComponent', () => {
  let component: HopdongchitietComponent;
  let fixture: ComponentFixture<HopdongchitietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopdongchitietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HopdongchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
