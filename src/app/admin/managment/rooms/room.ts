export interface RoomList {
    id : string;
    roomType : string;
    price : number;
    ameneties?: string[],
    picture?: string ;
    date_added : Date;
    rating : number;
}
export interface Room{
    avaibleRooms:number;
    bookedRooms:number;
    totalRooms:number;
}