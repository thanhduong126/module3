import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHopdongchitietComponent } from './update-hopdongchitiet.component';

describe('UpdateHopdongchitietComponent', () => {
  let component: UpdateHopdongchitietComponent;
  let fixture: ComponentFixture<UpdateHopdongchitietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHopdongchitietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHopdongchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
