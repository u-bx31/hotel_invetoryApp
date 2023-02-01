import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { RoomList } from '../room';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss'],
})
export class AddRoomComponent implements OnInit {
  room : RoomList | any;
  id !: string;
  valid: boolean = true;
  type!: string;
  imgUrl: any[] =[];
  roomType: any;
  roomList : RoomList[] = [];
  typeRooms : any[] = [];
  roomForm!:FormGroup;
  toppingsControl = new FormControl([]);
  toppingList: string[] = ['Wifi','Lunch','Dinner','Spa','jacuzzi','breakfast','none']

  
  constructor(
    private fb : FormBuilder,
    private roomService: RoomService,
    private router: ActivatedRoute,
    private router2: Router
  ) {}


  
  ngOnInit() {
    let sub = this.router.params.subscribe((parms)=>this.id = parms['id'])
    this.roomService.getRoomsType$.subscribe((parms)=>{
      this.typeRooms = parms
    })
    this.roomForm = this.fb.group({
      roomType: ['', Validators.required],
      picture: [''],
      price: ['', Validators.required],
      rating: ['', Validators.required],
      date_added: ['', Validators.required],
      ameneties : [[],Validators.required]
    });
    console.log(this.id);
    if(this.id !== undefined){
      this.type = 'Edit'
      this.roomService.getRooms$.subscribe((parms)=>{
        this.roomList = parms
        this.room = this.roomList.find((rooms)=> rooms.id === this.id ); 
        this.roomForm.patchValue({
          id : this.id,
          roomType: this.room.roomType,
          picture: this.room.picture,
          price: this.room.price,
          rating: this.room.rating,
          date_added: this.room.date_added,
          ameneties : this.room.ameneties.map((options : any)=>{
            return options;
          })
        })
      })
    }
    else{
      this.type = 'Add'
    }
  }
  selcetionF(){
    this.imgUrl = this.typeRooms.filter((res)=>res.type === this.roomForm.value.roomType).map((res)=>res.images)
   
  }
  addRoom() {
    if (this.roomForm.invalid) {
      this.valid = false;
      console.log(34,this.valid);
      
    } else {
      this.imgUrl.map((img)=>{
        this.roomForm.value.picture = img
      })
      if(this.type == 'Add'){
        console.log('room added');
        this.roomService
        .addRooms(this.roomForm.value)
        .subscribe((room) => {
          console.log(room);
        })
      }
      else{
        console.log('room edited');
        this.roomService.editRooms(this.roomForm.value).subscribe({
          next : (res)=>{console.log(res);}
        })
      }
      this.router2.navigateByUrl('/admin/management/rooms/list')
      this.roomForm.reset();
    }
  }


  onToppingRemoved(topping: string) {
    const toppings: any = this.toppingsControl.value as string[];
    this.removeFirst(toppings, topping);
    this.toppingsControl.setValue(toppings); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}
