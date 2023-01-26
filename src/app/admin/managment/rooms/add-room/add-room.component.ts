import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
  imgUrl: any[] =[];
  roomType: any;

  constructor(
    private fb : FormBuilder,
    private roomService: RoomService,
    private router: ActivatedRoute,
    private router2: Router
  ) {}
    roomList : RoomList[] = [];
    typeRooms : any[] = [];
    roomForm!:FormGroup;
  
  ngOnInit() {
    let sub = this.router.params.subscribe((parms)=>this.id = parms['id'])
    this.roomService.getRoomsType$.subscribe((parms)=>{
      this.typeRooms = parms
    })
    this.roomForm = this.fb.group({
      id : ['90'],
      roomType: ['', [Validators.required]],
      picture: ['', [Validators.required]],
      price: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      date_added: ['', [Validators.required]],
    });
    console.log(this.id);
    if(this.id !== undefined){
      this.type = 'Edit'
      this.roomService.getRooms$.subscribe((parms)=>{
        this.roomList = parms
        this.room = this.roomList.find((rooms)=> rooms.id === this.id ); 
        this.roomForm.patchValue({
          id : this.id,
          roomType: this.room.roomType,
          picture: this.room.picture,
          price: this.room.price,
          rating: this.room.rating,
          date_added: this.room.date_added,
        })
      })
    }
    else{
      this.type = 'Add'
    }
  }
  selcetionF(){
    this.imgUrl = this.typeRooms.filter((res)=>res.type === this.roomForm.value.roomType).map((res)=>res.images)
  }
  addRoom() {
    this.imgUrl.map((img)=>{
      this.roomForm.value.picture = img
    })
    console.log(this.roomForm.valid);
    console.log(this.roomForm.value);
    if (this.roomForm.invalid) {
      this.valid = false;
      
    } else {
      if(this.type == 'Add'){
        console.log('room added');
        this.roomService
        .addRooms(this.roomForm.value)
        .subscribe((room) => {
          console.log(room);
        })
      }
      else{
        console.log('room edited');
        this.roomService.editRooms(this.roomForm.value).subscribe({
          next : (res)=>{console.log(res);}
        })
      }
      this.router2.navigateByUrl('/admin/management/rooms/list')
      this.roomForm.reset();
    }
  }
}
