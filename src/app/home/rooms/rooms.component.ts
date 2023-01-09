import { Component, OnInit } from '@angular/core';
import { RoomList } from 'src/app/admin/managment/rooms/room';
import { RoomService } from 'src/app/admin/managment/rooms/service/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{

  roomList : RoomList[] = [];

  constructor(private service: RoomService){}

  ngOnInit(): void {
    this.service.getRooms$.subscribe((parms)=>{
      this.roomList = parms;
    })
  }

}
