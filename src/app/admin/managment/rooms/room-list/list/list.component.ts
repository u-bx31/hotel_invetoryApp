import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../../room';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() rooms : RoomList[] |null =[];
  @Output() handleDeleted = new EventEmitter<RoomList>;


  handleDelete =(rooms: RoomList)=>{
    this.handleDeleted.emit(rooms);
  }
}
