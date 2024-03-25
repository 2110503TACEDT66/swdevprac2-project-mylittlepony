'use client'
import DateReserve from "@/components/DateReserve";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/reservationSlice";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";


export default function Booking () {

    const dispatch = useDispatch<AppDispatch>()
    
    const makeBooking = () => {
        if ( bookDate && hospital && name && surname && id ){
            const item:BookingItem = {
                name: name,
                surname: surname,
                id: id ,
                hospital: hospital,
                bookDate: dayjs(bookDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
        }
    }

    const [bookDate, setBookDate ] = useState<Dayjs|null>(null)
    const [hospital, setHospital] = useState<string|null>(null)
    const [name, setName] = useState<string|null>(null)
    const [surname, setSurname] = useState<string|null>(null)
    const [id, setCitizenId] = useState<string|null>(null)
    
    return (
        <main className="items-center flex flex-col">
            <div className='text-center text-2xl font-bold font-sans'>
                Vaccine Booking
            </div>
            
            <div className="w-fit space-y-2">
                
                <div className="text-md text-left text-grey-600">Pick-Up date and Hospital</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}}
                onHospitalChange={(value:string)=>{setHospital(value)}}
                onNameChange={(value:string) => {setName(value)}}
                onSurnameChange={(value:string) => {setSurname(value)}}
                onCitizenIdChange={(value:string) => {setCitizenId(value)}}
                 />
            </div>
            

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" name = "Book Vaccine"
            onClick={makeBooking}>
                Book Vaccine</button>
        </main>
    );
}