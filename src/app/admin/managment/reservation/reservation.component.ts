import { Component, OnInit } from '@angular/core';
import { RoomService } from '../rooms/service/room.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit{
  numberRooms : number = 0;
  loading : boolean = false;
  Reservation !: any[];
  constructor(private service :RoomService){}

  ngOnInit(): void {
    this.loading = true;
    this.getAllReservation();
  }

  getAllReservation = ()=>{
    this.service.getReservation$.subscribe((values)=>{
      this.Reservation = values;
      if(this.Reservation ){
        this.loading = false
        this.numberRooms = this.Reservation.length
      }
    })
  }

  handleDelete = (id: string) => {
    this.loading = true;
    this.service.deleteReservation(id).subscribe();
    this.getAllReservation();
  };



}
