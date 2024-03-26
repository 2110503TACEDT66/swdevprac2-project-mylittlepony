export interface ReservationItem {
  _id: string,
  reservationDate: string,
  user: string,
  restaurant: string,
  createdAt: string,
  __v: number
}

export interface RestaurantItem {
    _id: string,
    name: string,
    address: string,
    // picture: string,
    tel: string,
    opentime: string,
    closetime: string,
    __v: number,
    reservations: ReservationItem[]
  }
  
  export interface RestaurantJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: RestaurantItem[],
    averageRating: number,
  }
  
  export interface BookingItem {
    name: string;
    surname: string;
    id: string;
    hospital: string;
    bookDate: string;
  }

  export interface ReviewJson {
    success: boolean,
    rating: number,
    pagination: Object,
    data: ReviewItem[],
  }

  export interface ReviewItem {
    id: string,
    description : string,
    restaurant : Object ,
    rating : number,
    createAt: Date,
  }