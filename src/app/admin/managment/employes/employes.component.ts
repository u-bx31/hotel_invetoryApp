import { Component, OnInit } from '@angular/core';
import { RoomService } from '../rooms/service/room.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.scss']
})
export class EmployesComponent implements OnInit {
  numberEmployes!:number;
  employesList : any = [];

  constructor(private service:RoomService){}


  ngOnInit(): void {
    this.service.getEmployes$.subscribe((res)=>{
      this.employesList = res;
      console.log(res);
    })

  }

  handleDelete(id : string){
    this.service.deleteEmployes(id).subscribe();
  }
  
}
