import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ListComponent } from './room-list/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { RoomTypeComponent } from './room-type/room-type.component';
import { ListTypeComponent } from './room-type/list-type/list-type.component';
import { AddRoomTypeComponent } from './add-room-type/add-room-type.component';


@NgModule({
  declarations: [
    AddRoomComponent,
    RoomListComponent,
    ListComponent,
    RoomTypeComponent,
    ListTypeComponent,
    AddRoomTypeComponent,
  ],
  imports: [    
   
    CommonModule,
    RoomsRoutingModule,
    NgMaterialModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class RoomsModule { }
