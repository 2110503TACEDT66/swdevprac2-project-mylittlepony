'use client'
import { useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { removeBooking } from "@/redux/features/reservationSlice"

export default function BookingList() {
    
    const hospitalItems = useAppSelector( ( state )=> state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    if (hospitalItems.length === 0 ) {
        
    } 
    return (
        <>
        { hospitalItems.length === 0 ? (
            <div className="text-xl text-center">No Vaccine Booking  </div>
        )
        :
        (
            hospitalItems.map((bookItem) => (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                    key = { bookItem.name }>
                        <div className="text-md">
                            Name: {bookItem.name}</div>
                        <div className="text-md">Surname: {bookItem.surname} 
                        </div>
                        <div className="text-md">Citizen ID: {bookItem.id} 
                        </div>
                        <div className="text-md">Hospital:: {bookItem.hospital} 
                        </div>
                        <div className="text-md">Date: {bookItem.bookDate}</div>

                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                        onClick={ ()=> dispatch(removeBooking(bookItem.id)) }>
                        Remove from Booking
                        </button>
                </div>
            ))
        )}
        </>
    )
}