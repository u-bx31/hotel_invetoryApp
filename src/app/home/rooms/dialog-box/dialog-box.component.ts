import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Reservation } from '../reservation';
import { HttpClient } from '@angular/common/http';
import { RoomService } from 'src/app/admin/managment/rooms/service/room.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  valid: string = 'show';
  success!: boolean;
  showed: string = 'hide';
  avaible!: boolean;
  roomState!: string;
  checkStateMessage!: string;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: RoomService,
    private fb: FormBuilder
  ) {
    this.avaible = this.data.room.avaible;
  }
  bookFrom!: FormGroup;

  ngOnInit(): void {
    this.success = false;
    this.checkStateMessage = 'Check if the room Avaible';
    this.bookFrom = this.fb.group({
      room_id: new FormControl(this.data.room_id),
      user_email: new FormControl('', [Validators.required, Validators.email]),
      user_firstName: new FormControl('', [Validators.required]),
      user_lastName: new FormControl('', [Validators.required]),
      user_phoneNumber: new FormControl('', [Validators.required]),
      checkinTime: new FormControl('', [Validators.required]),
      checkoutTime: new FormControl('', [Validators.required]),
    });

    setTimeout(() => {
      this.valid = 'hide';
      this.showed = 'show';
    }, 3000);

    if (this.avaible === true) {
      this.roomState = 'Avaible Room';
    } else {
      this.roomState = 'Not Avaible Room';
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }

  addReservation() {
    
    this.service.addReservation(this.bookFrom.value).subscribe({
      next: () => {
        this.checkStateMessage = 'Adding you reservation please wait ...';
        this.valid = 'show';
        this.showed = 'hide';
        setTimeout(() => {
          this.valid = 'hide';
          this.data.room.avaible = false;
          this.service.editRooms(this.data.room).subscribe((parms)=>console.log(parms));
          this.success = true;
        }, 3000);
      },
      complete: () => {
        setTimeout(() => {
          this.onCancel();
        }, 4000);
      },
    });
  }
}
