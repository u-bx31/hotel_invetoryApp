import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypeComponent } from './room-type.component';

describe('RoomTypeComponent', () => {
  let component: RoomTypeComponent;
  let fixture: ComponentFixture<RoomTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
