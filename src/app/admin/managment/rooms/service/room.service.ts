import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, shareReplay, Subject } from 'rxjs';
import { RoomList } from '../room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private service : HttpClient) {}

  url : string  = 'http://localhost:3000';

  error$ = new Subject<string>;
  getRooms$ = this.service.get<RoomList[]>(`${this.url}/rooms`).pipe(
    catchError((err)=>{
      console.log('error',err.message);
      return of([]);
    })
  );
  getRoomsType$ = this.service.get<any>(`${this.url}/roomType`).pipe(
    catchError((err)=>{
      console.log('error',err.message);
      return of([]);
    })
  );

  getRoom(id : string){
    return this.service.get<RoomList>(`${this.url}/rooms/${id}`);
  }

  addRooms(room : RoomList){
    return this.service.post<any>(`${this.url}/rooms`,room);
  }
  editRooms(room : RoomList){
    return this.service.put<any>(`${this.url}/rooms/${room.id}`,room);
  }
  deleteRooms(id : string){
    return this.service.delete<any>(`${this.url}/rooms/${id}`);
  }
}
