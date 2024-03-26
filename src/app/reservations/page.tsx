'use client'
import DateReserve from "@/components/DateReserve";
import { useDispatch } from "react-redux";
import { addReservation } from "@/redux/features/reservationSlice";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AppDispatch } from "@/redux/store";
import { ReservationItem } from "../../../interface";
import { useSearchParams } from "next/navigation";


export default function Reservation () {

    const urlParams = useSearchParams()
    const restaurantname = urlParams.get('restaurant')

    const dispatch = useDispatch<AppDispatch>()
    
    const makeReservation = () => {
        if ( bookDate && restaurantname && name && tel && person && time){
            const item:ReservationItem = {
                name: name,
                restaurantname: restaurantname,
                tel: tel,
                time: time,
                person: person,
                bookDate: dayjs(bookDate).format("YYYY/MM/DD")
            }
            dispatch(addReservation(item))
        }
    }

    const [bookDate, setBookDate ] = useState<Dayjs|null>(null)
    const [name, setName] = useState<string|null>(null)
    const [time, setTime] = useState<string|null>(null)
    const [tel, setTel] = useState<string|null>(null)
    const [person, setPerson] = useState<string|null>(null)

    
    return (
        <main className="items-center flex flex-col bg-neutral-900 ">
            <div className='text-center text-2xl font-bold font-sans'>
                Table Reserve
            </div>
            <div className="text-xl font-medium">{restaurantname}</div>

            
            <div className="w-fit space-y-2">
                <DateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}}
                onNameChange={(value:string) => {setName(value)}}
                onTimeChange={(value:string) => {setTime(value)}}
                onTelChange={(value:string) => {setTel(value)}}
                onPersonChange={(value:string) => {setPerson(value)}}
                 />
            </div>
            

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" name = "Book Vaccine"
            onClick={makeReservation}>
                Reserve Table</button>
        </main>
    );
}