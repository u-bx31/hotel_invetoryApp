import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, shareReplay, Subject } from 'rxjs';
import { RoomList } from '../room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private service : HttpClient) {}



  error$ = new Subject<string>;
  getRooms$ = this.service.get<RoomList[]>('http://localhost:3000/rooms').pipe(
    catchError((err)=>{
      console.log('error',err.message);
      return of([]);
    })
  );

  getRoom(id : string){
    return this.service.get<RoomList>(`http://localhost:3000/rooms/${id}`);
  }

  addRooms(room : RoomList){
    return this.service.post<any>('http://localhost:3000/rooms',room);
  }
  editRooms(room : RoomList){
    return this.service.put<any>(`http://localhost:3000/rooms/${room.id}`,room);
  }
  deleteRooms(id : string){
    return this.service.delete<any>(`http://localhost:3000/rooms/${id}`);
  }
}
