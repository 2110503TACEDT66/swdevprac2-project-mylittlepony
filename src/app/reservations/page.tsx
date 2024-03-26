'use client'
import { redirect} from "next/navigation";
import styles from "./reservations.module.css"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { InputAdornment, FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { AccessTime , LocalPhoneOutlined } from "@mui/icons-material"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useSearchParams } from "next/navigation"
import { Dayjs } from "dayjs";
import { useState } from "react";
import './DatePickerStyles.css';

import { useSession } from "next-auth/react";
import { constants } from "buffer";
import session from "redux-persist/lib/storage/session";

export default function ReservationPage () {

    const [reservationDate, setReservationDate] = useState<Dayjs|null>(null)

    const urlParams = useSearchParams()
    const restaurantId = urlParams.get('id')
    const restaurant = urlParams.get('restaurant')
    const {data: session} = useSession()
    const id = session?.user.data._id;

    const addReservations = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const addReservationForm = new FormData(e.currentTarget);
        const name = addReservationForm.get("name")
        const reservationDate = addReservationForm.get("reservationdate")
        const time = addReservationForm.get("time")
        const tel = addReservationForm.get("tel")
        const person = addReservationForm.get("person")
        const createdAt = new Date()

        try {
            const response = await fetch(`http://localhost:5000/api/v1/restaurants/${restaurantId}/reservations`, {
                method: "POST",
                headers: {
                    "authorization": `Bearer ${session?.user.token}`,
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({reservationDate, id, name, restaurantId, time, person, tel, createdAt}),
            })
            if(!response.ok) {
                throw new Error("Failed to make reserve")
            }
        }catch(error){
            console.log(error)
        }
    }
 
    return (
        <main className={styles.page}>
            <div className={styles.text}> Reserve Table </div>
            <div className={styles.textWhite}>{restaurant}</div>
            <form className='flex flex-col justify-evenly' onSubmit={addReservations}>
                
                <input className={styles.inputFieldName} name="name" placeholder="Name"/>
                
                <div className="flex ">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    value={reservationDate}
                    name="reservationdate"
                    onChange={(value) => setReservationDate(value)}/>
                </LocalizationProvider>

                <input name="time" className={styles.inputField} placeholder="Time" />
                

                </div>

                <div className="flex flex-row">
                <input name="person" className={styles.inputField} type="number" min={1} max={15} placeholder="Guest Number"/>
                <input name="tel" className={styles.inputField} placeholder="Telephone"/>
                </div>
                
                <button type="submit" className={styles.reserveButton} name = "Book Table">
                    Confirm
                </button>
            </form>
        </main>
    );
}