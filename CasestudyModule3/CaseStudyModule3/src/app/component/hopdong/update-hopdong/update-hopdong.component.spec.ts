import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHopdongComponent } from './update-hopdong.component';

describe('UpdateHopdongComponent', () => {
  let component: UpdateHopdongComponent;
  let fixture: ComponentFixture<UpdateHopdongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHopdongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHopdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
