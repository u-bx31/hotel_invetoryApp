import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.scss'],
})
export class ReservationAddComponent implements OnInit {
  type: string = 'add';
  res!: any[];
  id !: string;
  constructor(private router:ActivatedRoute){}
  reservation = new FormGroup({
    room_id: new FormControl(''),
    user_email: new FormControl('', [Validators.required, Validators.email]),
    user_firstName: new FormControl('', [Validators.required]),
    user_lastName: new FormControl('', [Validators.required]),
    user_phoneNumber: new FormControl('', [Validators.required]),
    checkinTime: new FormControl('', [Validators.required]),
    checkoutTime: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.router.params.subscribe((parms)=>this.id = parms['id'])
    this.reservation = this.res.find((res)=>res.id = this.id)
  }

  


}
