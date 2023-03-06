import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { RoomList } from 'src/app/admin/managment/rooms/room';
import { RoomService } from 'src/app/admin/managment/rooms/service/room.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { NgxMasonryModule, NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {
  id : string | undefined = '';
  imgUrl : any[]= [] ;
  room !: any; 
  roomType: any[] = [];
  constructor(public dialog: MatDialog,private parm:ActivatedRoute,private service : RoomService,){}

  masonryImages :any = [];
  public masonryOptions: NgxMasonryOptions = {
    gutter: 10,
    
  };
  limit = 15;
  ngOnInit(){
    this.masonryImages = [
      "/assets/images/banner.jpg",
      "/assets/images/room1.png",
      "/assets/images/banner3.jpg",
      "/assets/images/room3.png",
      "/assets/images/banner2.jpg",
      "/assets/images/banner4.jpg"
    ]
    this.service.getRoomsType$.subscribe((parms)=>{
      this.roomType = parms;
    })
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
