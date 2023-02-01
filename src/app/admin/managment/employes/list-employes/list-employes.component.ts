import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-employes',
  templateUrl: './list-employes.component.html',
  styleUrls: ['./list-employes.component.scss']
})
export class ListEmployesComponent {

  @Input() employesList : any[] |null =[];
  @Output() handleDeleted = new EventEmitter<string>;

  handleDelete(id:string){
    this.handleDeleted.emit(id)
  }
}
