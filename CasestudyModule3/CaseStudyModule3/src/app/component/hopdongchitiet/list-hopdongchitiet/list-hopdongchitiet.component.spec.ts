import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHopdongchitietComponent } from './list-hopdongchitiet.component';

describe('ListHopdongchitietComponent', () => {
  let component: ListHopdongchitietComponent;
  let fixture: ComponentFixture<ListHopdongchitietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHopdongchitietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHopdongchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
