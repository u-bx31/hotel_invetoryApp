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
  url = 'https://img.icons8.com/ios/100/000000/contract-job.png';
  constructor(
    private roomService: RoomService,
    private router: ActivatedRoute,
    private router2: Router
  ) {}
    roomTypeList !: any;
  
  ngOnInit() {
    let sub = this.router.params.subscribe((parms)=>this.id = parms['id'])

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
        type : '',
        images : this.url
      };
    }
  }
  onSelect(event:any) {
    
    let fileType = event.target.files[0].type;
    if (fileType.match(/image\/*/)) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.roomType.images  = event.target.result;
      };
    } else {
      window.alert('Please select correct image format');
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
        images : ''
      });
      
    }
  }


  
}
