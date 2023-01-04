import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoomList } from 'src/app/admin/managment/rooms/room';
import { RoomService } from 'src/app/admin/managment/rooms/service/room.service';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {
  id : string | undefined = '';

  room !: any; 
  constructor(private parm:ActivatedRoute,private service : RoomService){}

  ngOnInit(){
    this.parm.paramMap.subscribe((parms)=>
    this.id = parms.get('id')?.toString())
    this.service.getRooms$.subscribe((parms)=>{
      this.room = parms.find((room)=> room.id === this.id);
      console.log(this.room);
    })
  }
}
