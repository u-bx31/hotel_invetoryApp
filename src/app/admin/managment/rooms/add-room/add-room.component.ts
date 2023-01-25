import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { RoomList } from '../room';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss'],
})
export class AddRoomComponent implements OnInit {
  room : RoomList | any;
  id !: string;
  valid: boolean = true;
  type!: string;
  // tetRom : RoomList ={
  //   id : 'eaf44ffd-953e-4483-9ded-3e8cbecd7e5b',
  //   roomType : 'eco',
  //   price : 1222,
  //   rating : 2,
  //   checkinTime : new Date(),
  //   checkoutTime : new Date()
  // }

  constructor(
    private roomService: RoomService,
    private router: ActivatedRoute,
    private router2: Router
  ) {}
    roomList !: RoomList[];
    typeRooms : any = [];
  
  ngOnInit() {
    let sub = this.router.params.subscribe((parms)=>this.id = parms['id'])
    this.roomService.getRoomsType$.subscribe((parms)=>{
      this.typeRooms = parms

    })
    console.log(this.id);
    if(this.id !== undefined){
      this.type = 'Edit'
      this.roomService.getRooms$.subscribe((parms)=>{
        this.roomList = parms
        this.room = this.roomList.find((rooms)=> rooms.id === this.id ); 
      })
    }
    else{
      this.type = 'Add'
      this.room = {
        avaible : true
      };
    }
  }
  addRoom(roomForm: NgForm) {
    if (roomForm.invalid) {
      this.valid = false;
      
    } else {
      if(this.type == 'Add'){
        console.log('room added');
        this.roomService
        .addRooms(this.room)
        .subscribe((room) => console.log(room));
        console.log(roomForm.value);
      }
      else{
        console.log('room edited');
        this.roomService.editRooms(this.room).subscribe({
          next : (res)=>{console.log(res);}
        })
      }
      this.router2.navigateByUrl('/admin/management/rooms/list')
      roomForm.resetForm({
        roomType: '',
        price: 0,
        rating: 0,
        checkinTime: new Date(),
        checkoutTime: new Date(),
      });
      
    }
  }
}
