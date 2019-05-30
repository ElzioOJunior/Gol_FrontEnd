import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAirplaneComponent } from './edit-airplane.component';

describe('EditAirplaneComponent', () => {
  let component: EditAirplaneComponent;
  let fixture: ComponentFixture<EditAirplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAirplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAirplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
