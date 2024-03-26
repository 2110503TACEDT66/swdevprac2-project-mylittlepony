'use client'
import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { InputAdornment, FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { Dayjs } from "dayjs"
import { AccessTime , LocalPhoneOutlined } from "@mui/icons-material"
import styles from "./datereserve.module.css"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useSearchParams } from "next/navigation"

export default function DateReserve() {
    const [reservationDate, setReservationDate] = useState<Dayjs | null>(null);

    
    const addReservations = async (addReservationForm: FormData) => {
        const formData = Object.fromEntries(addReservationForm.entries());

        try {
        } catch(error) {
            console.error("Failed to add reservation:", error);
        }
    };


    const urlParams = useSearchParams()
    const restaurant = urlParams.get('restaurant')
    
    return(
        
        <div className = "space-y-2 w-fit px-10 py-5 flex flex-col justify-center align-center">
        
           {/* <div className="text-5xl text-center font-medium text-white">{restaurant}</div>

           <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                <InputLabel className="text-white" 
                    sx={{ color: 'white', 
                        '&.Mui-focused': {color: '#F4D28F',}
                    }}
                >Name</InputLabel>
                <OutlinedInput required id="name" name="name" label="Name"
                    sx={{'& fieldset': {borderColor: '#F4D28F !important', },
                        '& .MuiOutlinedInput-input': {color: 'white', },
                        '&::placeholder': { color: 'white', },
                    }}
                />
            </FormControl>

            <div className="flex"> */}

            <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker
                        value={reservationDate}
                        onChange={(value) => setReservationDate(value)}
                        components={{
                            OpenPickerIcon: () => <CalendarTodayIcon sx={{ color: 'white' }} />,
                        }}
                    />
                </LocalizationProvider>
            </FormControl>
{/*             
            <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                <InputLabel className="text-white" 
                    sx={{ color: 'white', 
                        '&.Mui-focused': {color: '#F4D28F',}
                    }}
                >Time</InputLabel>
                <OutlinedInput required id="time" name="time" label="Time"
                    endAdornment={
                        <InputAdornment position="end" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <AccessTime style={{ color: 'white' }} />
                        </InputAdornment>
                    }
                    sx={{'& fieldset': {borderColor: '#F4D28F !important', },
                        '& .MuiOutlinedInput-input': {color: 'white', },
                        '&::placeholder': { color: 'white', },
                    }}
                />
            </FormControl>

            </div>

            <div className="flex">

      
            <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <input
                        type="number"
                        id="person"
                        name="person"
                        placeholder="Guest Number"
                        className={styles.guestnum}
                    />
            </FormControl>


            <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                <InputLabel className="text-white" 
                    sx={{ color: 'white', 
                        '&.Mui-focused': {color: '#F4D28F',}
                    }}
                >Tel</InputLabel>
                <OutlinedInput label="Tel" required id="tel" name="tel"
                    endAdornment={
                        <InputAdornment position="end" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <LocalPhoneOutlined style={{ color: 'white' }} />
                        </InputAdornment>
                    }
                    sx={{'& fieldset': {borderColor: '#F4D28F !important', },
                        '& .MuiOutlinedInput-input': {color: 'white', },
                        '&::placeholder': { color: 'white', },
                    }}
                />
            </FormControl>

            </div> */}
            
        </div>
    )
}