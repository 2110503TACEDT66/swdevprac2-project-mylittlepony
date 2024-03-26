'use client'
import { useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { removeReservation } from "@/redux/features/reservationSlice"

export default function BookingList() {
    
    const restaurantItems = useAppSelector( ( state )=> state.reservationSlice.reserveItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        { restaurantItems.length === 0 ? (
            <div className="text-xl text-center">No Table  </div>
        )
        :
        (
            restaurantItems.map((reservationItem) => (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                    key = { reservationItem._id }>
                        <div className="text-md">Date: {reservationItem.reservationDate}</div>
                        <div className="text-md">Time: {reservationItem.time} 
                        </div>
                        <div className="text-md">:Guest Number {reservationItem.person} 
                        </div>
                        <div className="text-md">Tel: {reservationItem.tel} 
                        </div>
                    
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                        onClick={ ()=> dispatch(removeReservation(reservationItem._id)) }>
                        Cancel
                        </button>
                </div>
            ))
        )}
        </>
    )
}