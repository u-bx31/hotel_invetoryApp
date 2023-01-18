import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAddComponent } from './reservation-add.component';

describe('ReservationAddComponent', () => {
  let component: ReservationAddComponent;
  let fixture: ComponentFixture<ReservationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
