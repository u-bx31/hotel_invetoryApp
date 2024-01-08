import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RoomList } from 'src/app/admin/managment/rooms/room';
import { RoomService } from 'src/app/admin/managment/rooms/service/room.service';
import { NgbModal, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  roomList: RoomList[] = [];
  filterRooms: RoomList[] = [];
  roomType: any[] = [];
  cardFormat: boolean = false;
  imgUrl: any[] = [];
  currentRate = 0;
  //value mat dateRangePicker
  
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  roomAmenties!: any;
  closeResult = '';
  loading: boolean = true;
  notFound: boolean = false;

  constructor(
    private service: RoomService,
    private modalService: NgbModal,
    private renderer: Renderer2,
    private fb: FormBuilder
  ) {}

  //function to fix filter card while scroling
  @ViewChild('filterSection') filterSection!: ElementRef;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = this.filterSection.nativeElement.getBoundingClientRect().top;

    // Check the offset to determine if the filter section should be fixed
    if (offset <= 0 && this.roomList.length || this.filterRooms.length > 3) {
      this.renderer.addClass(this.filterSection.nativeElement, 'fixed-filter');
    } else {
      this.renderer.removeClass(
        this.filterSection.nativeElement,
        'fixed-filter'
      );
    }
  }

  // value of mat Slider
  formatLabel(value: number): string {
    return `${value}`;
  }

  roomsForm!: FormGroup;
  ngOnInit(): void {
    this.roomsForm = this.fb.group({
      room_type: [''],
      max_price: [''],
      min_price: [''],
      rating: [''],
    });
    this.service.getRoomsType$.subscribe((parms) => {
      this.roomType = parms;
      if (this.roomType) {
        this.loading = false;
      }
    });
    this.getAllRooms();
  }

  checkAmenties(value: string | undefined) {
    switch (value) {
      case 'Lunch': {
        return (this.roomAmenties = 'restaurant');
      }
      case 'Wifi': {
        return (this.roomAmenties = 'wifi');
      }
      case 'Dinner': {
        return (this.roomAmenties = 'dinner_dining');
      }
      default: {
        return;
      }
    }
  }
  open() {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.data = this.roomList;
  }

  onSubmit(e: Event) {
    e.preventDefault();
    let { room_type, min_price ,max_price, rating } = this.roomsForm.value;
    this.loading = true;
    console.log('price' ,this.roomsForm.value);
    
    if (room_type !== '' || max_price !== '' || rating !== '') {
      // Use a temporary array for filtering
      let filteredRooms = [...this.roomList];

      if (room_type !== '') {
        filteredRooms = filteredRooms.filter(
          (item: any) => item.roomType === room_type
        );
      }
      if (max_price !== '' || 0 && min_price !== '' ||0) {
        filteredRooms = filteredRooms.filter(
          (item: any) => item.price >= min_price && item.price <= max_price
        );
      }
      if (rating !== '') {
        filteredRooms = filteredRooms.filter(
          (item: any) => item.rating  >= parseFloat(rating)
        );
      }
      // Update the roomList with the filtered results
      this.filterRooms = filteredRooms;

      if (this.filterRooms.length === 0) {
        this.notFound = true;
      }
    } else {
      this.getAllRooms();
    }
    // Set loading to false after filtering or fetching rooms
    this.loading = false;
  }
  getAllRooms() {
    this.service.getRooms$.subscribe((parms) => {
      this.roomList = parms;
      if (this.roomList) {
        this.loading = false;
        this.notFound = false;
      }
    });
  }

  clear(){
    this.roomsForm.reset()
    this.roomsForm.value.max_price = 0 
    this.roomsForm.value.min_price = 0 
    this.loading = true;
    this.getAllRooms()
  }
}
