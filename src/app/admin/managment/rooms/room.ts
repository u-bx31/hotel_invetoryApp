export interface RoomList {
    id : string;
    roomType : string;
    price : number;
    photos?: string ;
    checkinTime : Date;
    checkoutTime : Date;
    rating : number;
    aviable : boolean ;
}
export interface Room{
    avaibleRooms:number;
    bookedRooms:number;
    totalRooms:number;
}