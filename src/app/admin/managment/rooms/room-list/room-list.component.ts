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
  handleDelete = (id: string) => {
    this.roomService.deleteRooms(id).subscribe();
    this.getAllRooms()
  };
}
