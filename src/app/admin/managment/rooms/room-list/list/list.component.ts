import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../../room';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() rooms : RoomList[] |null =[];
  @Output() handleDeleted = new EventEmitter<string>;


  handleDelete =(id: string)=>{
    this.handleDeleted.emit(id);
  }
}
