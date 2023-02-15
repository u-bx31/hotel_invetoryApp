import { Component, OnInit } from '@angular/core';
import { RoomList } from 'src/app/admin/managment/rooms/room';
import { RoomService } from 'src/app/admin/managment/rooms/service/room.service';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{

  roomList : RoomList[] = [];
  roomType : any[] = [];
  cardFormat : boolean = true;
  imgUrl : any[] =[];
  currentRate = 0;
  //value mat dateRangePicker
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  roomAmenties !: any;

  constructor(private service: RoomService){}

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


}
