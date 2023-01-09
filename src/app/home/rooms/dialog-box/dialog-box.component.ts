import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { start } from '@popperjs/core';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  valid: string = 'show';
  showed: string = 'hide';
  avaible!: boolean;
  roomState!: string;
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.avaible = this.data.room.avaible;
  }

  email : string = '';
  name : string = '';
  phone !: number;
  dateStart !: string ;
  dateEnd !: string ;



  ngOnInit(): void {
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
}
