import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { RoomList } from 'src/app/admin/managment/rooms/room';
import { RoomService } from 'src/app/admin/managment/rooms/service/room.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {
  id : string | undefined = '';

  room !: any; 
  constructor(public dialog: MatDialog,private parm:ActivatedRoute,private service : RoomService,){}
  

  ngOnInit(){
    this.parm.paramMap.subscribe((parms)=>
    this.id = parms.get('id')?.toString())
    this.service.getRooms$.subscribe((parms)=>{
      this.room = parms.find((room)=> room.id === this.id);
      console.log(this.room);
    })
  }

  openDialog(){
     this.dialog.open(DialogBoxComponent,{
      width : '900px',
      height : '500px',
      data : {room : this.room,room_id : this.id}
    })
  }
}
