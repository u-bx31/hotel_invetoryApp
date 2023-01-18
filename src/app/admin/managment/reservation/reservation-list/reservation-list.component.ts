import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent {

  @Input() Reservation : any[] |null =[];
  @Output() handleDeleted = new EventEmitter<string>;


  handleDelete =(id: string)=>{
    this.handleDeleted.emit(id);
  }
}
