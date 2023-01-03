import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  {path : '',component : RoomsComponent },
  {path : 'list' , component : RoomListComponent},
  {path : 'list/add' , component : AddRoomComponent},
  {path : 'list/:id' , component : AddRoomComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
