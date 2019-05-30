import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAirplaneComponent } from './list-airplane.component';

describe('ListAirplaneComponent', () => {
  let component: ListAirplaneComponent;
  let fixture: ComponentFixture<ListAirplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAirplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAirplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
