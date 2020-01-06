import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDichvuComponent } from './update-dichvu.component';

describe('UpdateDichvuComponent', () => {
  let component: UpdateDichvuComponent;
  let fixture: ComponentFixture<UpdateDichvuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDichvuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDichvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
