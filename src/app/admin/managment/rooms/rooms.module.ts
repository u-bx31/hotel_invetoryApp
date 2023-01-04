import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ListComponent } from './room-list/list/list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddRoomComponent,
    RoomListComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule
  ]
})
export class RoomsModule { }
