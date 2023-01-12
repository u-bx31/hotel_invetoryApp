export interface Reservation {
    id? : string;
    room_id : string;
    user_email : string;
    user_firstName: string ;
    user_lastName: string ;
    user_phoneNumber : number;
    checkinTime : Date;
    checkoutTime : Date;
}