import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../../room';

@Component({
  selector: 'app-list-type',
  templateUrl: './list-type.component.html',
  styleUrls: ['./list-type.component.scss']
})
export class ListTypeComponent {
  @Input() roomTypeList : any |null =[];
  @Output() handleDeleted = new EventEmitter<string>;


  handleDelete =(id: string)=>{
    this.handleDeleted.emit(id);
  }
}
