import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationAddComponent } from './reservation-add/reservation-add.component';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { ReservationComponent } from './reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from 'src/app/spinner/spinner.component';


@NgModule({
  declarations: [
    ReservationComponent,
    ReservationListComponent,
    ReservationAddComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReservationRoutingModule,
    NgMaterialModule
  ]
})
export class ReservationModule { }
