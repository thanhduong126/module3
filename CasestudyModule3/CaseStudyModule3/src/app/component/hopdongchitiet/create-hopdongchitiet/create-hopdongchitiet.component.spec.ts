import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHopdongchitietComponent } from './create-hopdongchitiet.component';

describe('CreateHopdongchitietComponent', () => {
  let component: CreateHopdongchitietComponent;
  let fixture: ComponentFixture<CreateHopdongchitietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHopdongchitietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHopdongchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
