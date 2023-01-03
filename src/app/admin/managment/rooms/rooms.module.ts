import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ListComponent } from './room-list/list/list.component';
import { FormsModule } from '@angular/forms';
import { EditRoomComponent } from './edit-room/edit-room.component';


@NgModule({
  declarations: [
    AddRoomComponent,
    RoomListComponent,
    ListComponent,
    EditRoomComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule
  ]
})
export class RoomsModule { }
