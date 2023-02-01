import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, shareReplay, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoomList } from '../room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private service : HttpClient) {}

  url : string  = environment.apiEndpoint;

  error$ = new Subject<string>;
  getRooms$ = this.service.get<RoomList[]>(`${this.url}/rooms`).pipe(
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

  // room Type functions

  getRoomsType$ = this.service.get<any>(`${this.url}/roomType`).pipe(
    catchError((err)=>{
      console.log('error',err.message);
      return of([]);
    })
  );
  addRoomsType(roomType : any){
    return this.service.post<any>(`${this.url}/roomType`,roomType);
  }
  editRoomsType(roomType : any){
    return this.service.put<any>(`${this.url}/roomType/${roomType.id}`,roomType);
  }
  deleteRoomsType(id : string){
    return this.service.delete<any>(`${this.url}/roomType/${id}`);
  }

  // Reservation 
  addReservation(reservation : any){
    return this.service.post<any>(`${this.url}/reservation`,reservation);
  }
  getReservation$ = this.service.get<any>(`${this.url}/reservation`).pipe(
    catchError((err)=>{
      console.log('error',err.message);
      return of([]);
    })
  );

  editReservation(reservation : any){
    return this.service.put<any>(`${this.url}/reservation/${reservation.id}`,reservation);
  }
  deleteReservation(id : string){
    return this.service.delete<any>(`${this.url}/reservation/${id}`);
  }
  // employes 
  addEmployes(employes : any){
    return this.service.post<any>(`${this.url}/employes`,employes);
  }
  getEmployes$ = this.service.get<any>(`${this.url}/employes`).pipe(
    catchError((err)=>{
      console.log('error',err.message);
      return of([]);
    })
  );

  editEmployes(employes : any){
    return this.service.put<any>(`${this.url}/Employes/${employes.id}`,employes);
  }
  deleteEmployes(id : string){
    return this.service.delete<any>(`${this.url}/employes/${id}`);
  }
}
