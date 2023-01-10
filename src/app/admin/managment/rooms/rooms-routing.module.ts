import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoomTypeComponent } from './add-room-type/add-room-type.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomTypeComponent } from './room-type/room-type.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  {path : '',component : RoomsComponent },
  {path : 'list' , component : RoomListComponent},
  {path : 'list/add' , component : AddRoomComponent},
  {path : 'list/:id' , component : AddRoomComponent},
  {path : 'type' , component : RoomTypeComponent},
  {path : 'type/add' , component : AddRoomTypeComponent},
  {path : 'type/:id' , component : AddRoomTypeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
