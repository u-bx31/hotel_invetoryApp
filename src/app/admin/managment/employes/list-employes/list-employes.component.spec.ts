import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployesComponent } from './list-employes.component';

describe('ListEmployesComponent', () => {
  let component: ListEmployesComponent;
  let fixture: ComponentFixture<ListEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
