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
  roomType : any[] = [];

  imgUrl : any[] =[];

  constructor(private service: RoomService){}

  ngOnInit(): void {
    this.service.getRoomsType$.subscribe((parms)=>{
      this.roomType = parms;
    })
    this.service.getRooms$.subscribe((parms)=>{
      this.roomList = parms;
      // this.roomList.map((room)=>{
      //   this.imgUrl = this.roomType.filter((res)=>res.type === room.roomType).map((res)=>res.images)
      //   this.imgUrl.map((img)=>{
      //     room.photos = img
      //   })
      // })

      
    })
  }

}
