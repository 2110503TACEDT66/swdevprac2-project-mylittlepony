'use client'
import DateReserve from "@/components/DateReserve";
import { useDispatch } from "react-redux";
import { addReservation } from "@/redux/features/reservationSlice";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AppDispatch } from "@/redux/store";
import { ReservationItem } from "../../../interface";
import { useSearchParams } from "next/navigation";
import { create } from "domain";


export default function Reservation () {

    const urlParams = useSearchParams()
    const restaurant = urlParams.get('restaurant')
    const _id = urlParams.get('_id')
    const createdAt = urlParams.get('createdAt')
    const __v = urlParams.get('__v')

    const dispatch = useDispatch<AppDispatch>()
    
    const makeReservation = () => {
        if ( reservationDate && restaurant && user && tel && person && time && __v && createdAt && _id){
            const item:ReservationItem = {
                _id: _id,
                user: user,
                restaurant: restaurant,
                tel: tel,
                time: time,
                person: person,
                reservationDate: dayjs(reservationDate).format("YYYY/MM/DD"),
                createdAt: createdAt,
                __v: __v
            }
            dispatch(addReservation(item))
        }
    }

    const [reservationDate, setReservationDate ] = useState<Dayjs|null>(null)
    const [user, setUser] = useState<string|null>(null)
    const [time, setTime] = useState<string|null>(null)
    const [tel, setTel] = useState<string|null>(null)
    const [person, setPerson] = useState<string|null>(null)

    
    return (
        <main className="items-center flex flex-col bg-neutral-900 ">
            <div className='text-center text-2xl font-bold font-sans'>
                Table Reserve
            </div>
            <div className="text-xl font-medium">{restaurant}</div>

            
            <div className="w-fit space-y-2">
                <DateReserve onDateChange={(value:Dayjs)=>{setReservationDate(value)}}
                onNameChange={(value:string) => {setUser(value)}}
                onTimeChange={(value:string) => {setTime(value)}}
                onTelChange={(value:string) => {setTel(value)}}
                onPersonChange={(value:string) => {setPerson(value)}}
                 />
            </div>
            

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" name = "Book Table"
            onClick={makeReservation}>
                Reserve Table</button>
        </main>
    );
}