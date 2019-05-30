import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAirplaneComponent } from './add-airplane.component';

describe('AddAirplaneComponent', () => {
  let component: AddAirplaneComponent;
  let fixture: ComponentFixture<AddAirplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAirplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAirplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
