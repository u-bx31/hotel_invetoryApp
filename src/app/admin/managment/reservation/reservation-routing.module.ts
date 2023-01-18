import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationAddComponent } from './reservation-add/reservation-add.component';
import { ReservationComponent } from './reservation.component';

const routes: Routes = [
  {path : '',component: ReservationComponent},
  {path : 'add',component:ReservationAddComponent},
  {path : ':id',component:ReservationAddComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
