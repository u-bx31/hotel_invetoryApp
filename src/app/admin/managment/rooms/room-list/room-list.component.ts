import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';
import { RoomList } from '../room';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  numberRooms!: number;
  roomList: RoomList[] = [];
  
  constructor(private roomService: RoomService) {}
  ngOnInit() {
    this.getAllRooms();
   
  }
  private getAllRooms(){
    this.roomService.getRooms$.subscribe((rooms) => {
      this.roomList = rooms;
      this.numberRooms = rooms.length;
    });
  }
  handleDelete = (roomList: RoomList) => {
    this.roomService.getReservation$.subscribe((values) => {
      let reservation = values.filter(
        (res : any) => roomList.id === res.room_id
      );
      if (reservation.length > 0) {
        alert('this Room Already Exist on Another Table');
      } else {
        this.roomService.deleteRooms(roomList.id).subscribe();
        this.getAllRooms()
      }
    });

  };
}
