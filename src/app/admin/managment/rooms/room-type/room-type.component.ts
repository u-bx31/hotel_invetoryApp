import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';
import { RoomList } from '../room';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.scss']
})
export class RoomTypeComponent {
  numberRooms!: number;
  roomTypeList: any = [];
  
  constructor(private roomService: RoomService) {}
  ngOnInit() {
    this.getAllRoomsType();
   
  }
  private getAllRoomsType(){
    this.roomService.getRoomsType$.subscribe((rooms) => {
      this.roomTypeList = rooms;
      this.numberRooms = rooms.length;
    });
  }
  handleDelete = (id: string) => {
    this.roomService.deleteRoomsType(id).subscribe();
    this.getAllRoomsType()
  };
}
