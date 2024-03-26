export interface RestaurantItem {
    _id: string,
    name: string,
    address: string,
    picture:string,
    tel: string,
    opentime:string,
    closetime:string,
    __v: number,
    id: string
  }
  
  export interface RestaurantJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: RestaurantItem[]
  }
  
  export interface ReservationItem {
    name: string;
    tel: string;
    restaurantname: string;
    time: string;
    person: string;
    bookDate: string;
  }