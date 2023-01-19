import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../rooms/service/room.service';

@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.scss'],
})
export class ReservationAddComponent implements OnInit {
  type: string = 'add';
  res!: any[];
  res1: any={};
  id!: string;
  constructor(
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private service: RoomService
  ) {}
  reservation = this.fb.group({
    id : [''],
    room_id: [''],
    user_email: ['', [Validators.required, Validators.email]],
    user_firstName: ['', [Validators.required]],
    user_lastName: ['', [Validators.required]],
    user_phoneNumber: ['', [Validators.required]],
    checkinTime: ['', [Validators.required]],
    checkoutTime: ['', [Validators.required]],
  });
  ngOnInit(): void {
    this.router.params.subscribe((parms) => (this.id = parms['id']));
    this.service.getReservation$.subscribe((values) => {
      this.res = values;
      this.res1 = this.res.find((reserv) => (reserv.id == this.id));
      this.reservation.patchValue({
        id : this.id,
        room_id: this.res1.room_id,
        user_email: this.res1.user_email,
        user_firstName: this.res1.user_firstName,
        user_lastName: this.res1.user_lastName,
        user_phoneNumber: this.res1.user_phoneNumber,
        checkinTime: this.res1.checkinTime,
        checkoutTime: this.res1.checkoutTime,
      });
      console.log(this.reservation.value);
    });
  }

  handleSubmit = ()=>{
    if(this.id !== undefined){
      this.service.editReservation(this.reservation.value).subscribe(()=>console.log('done'))
    }
  }
}
