import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-add-room-type',
  templateUrl: './add-room-type.component.html',
  styleUrls: ['./add-room-type.component.scss']
})
export class AddRoomTypeComponent {
  roomType : any;
  id !: string;
  valid: boolean = true;
  type!: string;

  constructor(
    private roomService: RoomService,
    private router: ActivatedRoute,
    private router2: Router
  ) {}
    roomTypeList !: any;
  
  ngOnInit() {
    let sub = this.router.params.subscribe((parms)=>this.id = parms['id'])
    console.log(this.id);
    if(this.id !== undefined){
      this.type = 'Edit'
      this.roomService.getRoomsType$.subscribe((parms)=>{
        this.roomTypeList = parms
        this.roomType = this.roomTypeList.find((type:any)=> type.id === this.id ); 
      })
    }
    else{
      this.type = 'Add'
      this.roomType = {
      };
    }
  }
  addRoom(roomTypeForm: NgForm) {
    if (roomTypeForm.invalid) {
      this.valid = false;
      
    } else {
      if(this.type == 'Add'){
        console.log('room added');
        this.roomService
        .addRoomsType(this.roomType)
        .subscribe((room) => console.log(room));
        console.log(roomTypeForm.value);
      }
      else{
        console.log('room edited');
        this.roomService.editRoomsType(this.roomType).subscribe({
          next : (res)=>{console.log(res);}
        })
      }
      this.router2.navigateByUrl('/admin/management/rooms/type')
      roomTypeForm.resetForm({
        type: '',
      });
      
    }
  }
}
