import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHopdongComponent } from './list-hopdong.component';

describe('ListHopdongComponent', () => {
  let component: ListHopdongComponent;
  let fixture: ComponentFixture<ListHopdongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHopdongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHopdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
