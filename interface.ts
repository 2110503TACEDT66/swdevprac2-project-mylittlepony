export interface ReservationItem {
  _id: string,
  restaurant: string,
  user: string,
  reservationDate: string,
  time: string,
  tel: string,
  person: string,
  createdAt: string,
  __v: number
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
  
