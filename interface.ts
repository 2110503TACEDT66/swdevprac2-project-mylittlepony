export interface ReservationItem {
  _id: string,
  restaurant: string,
  user: string,
  reservationDate: string,
  time: string,
  tel: string,
  person: number,
  createdAt: string
}

export interface RestaurantItem {
    _id: string,
    name: string,
    address: string,
    picture: string,
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

  export interface ReservationItem {
    reservationDate: string,
    name: string,
    time: string,
    person: number,
    tel: string,
    createdAt: string,
  }
  
  export interface ReservationJson {
    success: boolean,
    count: number,
    data: ReservationItem[],
  }

  export interface ReviewItem {
    _id: string,
    rating: number,
    description: string,
    user: string,
    restaurant: string,
    createdAt: string
  }
  export interface ReviewJson {
    success: boolean,
    data: ReviewItem[],
  }
