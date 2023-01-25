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
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  valid: string = 'show';
  success!: boolean;
  showed: string = 'hide';
  avaible: boolean = true;
  roomState!: string;
  checkStateMessage!: string;
  currentDate: any = new Date();

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: RoomService,
    private fb: FormBuilder
  ) {
    // this.avaible = this.data.room.avaible;
  }
  bookForm!: FormGroup;
  resrvation: any = {};
  campaignTwo!: FormGroup;

  ngOnInit(): void {
    this.success = false;
    this.checkStateMessage = 'Please Wait ...';
    this.bookForm = this.fb.group({
      room_id: [this.data.room_id],
      user_email: ['', [Validators.required, Validators.email]],
      user_firstName: ['', [Validators.required]],
      user_lastName: ['', [Validators.required]],
      user_phoneNumber: ['', [Validators.required]],
      checkinTime: ['', [Validators.required]],
      checkoutTime: ['', [Validators.required]],
    });
    this.service.getReservation$.subscribe((values) => {
      let Roomvalues: any[] = values;
      let roomInfo = Roomvalues.filter(
        (val) => val.room_id == this.data.room_id
      );
      roomInfo.map((res) => {
        this.resrvation = res;
      });

      if (Object.keys(this.resrvation).length !== 0) {
        this.campaignTwo = this.fb.group({
          start: [new Date(this.resrvation.checkinTime)],
          end: [new Date(this.resrvation.checkoutTime)],
        });
      } else {
        this.campaignTwo = this.fb.group({
          start: [new Date('11-12-2022')],
          end: [new Date('12-12-2022')],
        });
      }
    });
    setTimeout(() => {
      this.valid = 'hide';
      this.showed = 'show';
    }, 3000);
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  myFilter = (d: Date): boolean => {
    // Prevent dates in ranges from being selected.
    return (
      !(d >= this.resrvation.checkinTime && d <= this.resrvation.checkoutTime) &&
      !(d >= this.resrvation.checkinTime && d <= this.resrvation.checkoutTime)
    );
  };
  addReservation() {
    this.service.getReservation$.subscribe((values) => {
      let Roomvalues: any[] = values;
      let roomInfo = Roomvalues.filter(
        (val) => val.room_id == this.data.room_id
      );
      roomInfo.map((res) => {
        if (
          Date.parse(this.bookForm.value.checkinTime) >=
            Date.parse(res.checkinTime) &&
          Date.parse(this.bookForm.value.checkinTime) <=
            Date.parse(res.checkoutTime)
        ) {
          this.roomState = 'Not Avaible Room';
          this.avaible = false;
          setTimeout(() => {
            this.avaible = true;
          }, 2000);
        }
      });
      if (this.avaible === true && this.bookForm.valid) {
        this.service.addReservation(this.bookForm.value).subscribe({
          next: () => {
            this.checkStateMessage = 'Adding you reservation please wait ...';
            this.valid = 'show';
            this.showed = 'hide';
            setTimeout(() => {
              this.valid = 'hide';
              this.data.room.avaible = false;
              this.service
                .editRooms(this.data.room)
                .subscribe((parms) => console.log(parms));
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
    });
  }
}
