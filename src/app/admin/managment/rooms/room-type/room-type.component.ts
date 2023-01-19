import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';
import { RoomList } from '../room';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.scss'],
})
export class RoomTypeComponent {
  numberRooms!: number;
  roomTypeList!: any[];

  constructor(private roomService: RoomService) {}
  ngOnInit() {
    this.getAllRoomsType();
  }
  private getAllRoomsType() {
    this.roomService.getRoomsType$.subscribe((rooms) => {
      this.roomTypeList = rooms;
      this.numberRooms = rooms.length;
    });
  }
  handleDelete = (roomType: any) => {
    this.roomService.getRooms$.subscribe((values) => {
      let roomlist = values;
      let roomListOfType = roomlist.filter(
        (roomList) => roomType.type === roomList.roomType
      );
      if (roomListOfType.length > 0) {
        alert('this Room Type Already Exist on Another Table');
      } else {
        this.roomService.deleteRoomsType(roomType.id).subscribe();
        this.getAllRoomsType();
      }
    });

  };
}
