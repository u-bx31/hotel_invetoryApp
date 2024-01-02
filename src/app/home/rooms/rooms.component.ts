import { Component, OnInit } from '@angular/core';
import { RoomList } from 'src/app/admin/managment/rooms/room';
import { RoomService } from 'src/app/admin/managment/rooms/service/room.service';
import { NgbModal, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{

  roomList : RoomList[] = [];
  roomType : any[] = [];
  cardFormat : boolean = false;
  imgUrl : any[] =[];
  currentRate = 0;
  //value mat dateRangePicker
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  roomAmenties !: any;
  closeResult = '';
  constructor(private service: RoomService,private modalService: NgbModal){}

  // value of mat Slider
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }

  ngOnInit(): void {
    this.service.getRoomsType$.subscribe((parms)=>{
      this.roomType = parms;
    })
    
    this.service.getRooms$.subscribe((parms)=>{
      console.log('rooms',parms);
      this.roomList = parms;
    })

  }

  checkAmenties(value : string | undefined){
    switch(value){
      case 'Lunch':{
        return this.roomAmenties = 'restaurant'
        
      }
      case 'Wifi' :{
        return this.roomAmenties = 'wifi'
      }
      case 'Dinner' :{
        return this.roomAmenties = 'dinner_dining'
      }
      default:{
        return
      }
      
    }

    
  }
  open() {
		const modalRef = this.modalService.open(ModalComponent,{ centered: true });
		modalRef.componentInstance.name = 'World';
		modalRef.componentInstance.data = this.roomList;
	}


}
