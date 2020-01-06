import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietHopdongComponent } from './chitiet-hopdong.component';

describe('ChitietHopdongComponent', () => {
  let component: ChitietHopdongComponent;
  let fixture: ComponentFixture<ChitietHopdongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietHopdongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietHopdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
