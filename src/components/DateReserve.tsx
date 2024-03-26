'use client'
import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select , MenuItem, TextField, InputAdornment, FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { Dayjs } from "dayjs"
import AccountCircle from '@mui/icons-material/AccountCircle';


export default function DateReserve({onDateChange, onNameChange, onTimeChange, onTelChange, onPersonChange}
    : {onDateChange:Function ,onTimeChange:Function,onNameChange:Function, onTelChange:Function, onPersonChange:Function}) {
    
    const [bookDate, setBookDate ] = useState<Dayjs|null>(null)
    const [name, setName] = useState<string|null>(null)
    const [time, setTime] = useState<string|null>(null)
    const [tel, setTel] = useState<string|null>(null)
    const [person, setPerson] = useState<string|null>(null)
    
    return(
        <div className = "bg-slate-100 rounded-lg space-y-2 w-fit px-10 py-5 flex flex-col justify-center align-center">
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
    <OutlinedInput
        value={name} 
        onChange={(e)=>{setName(e.target.value); onNameChange(e.target.value)}}
        endAdornment={
            <InputAdornment position="end" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <AccountCircle/>
            </InputAdornment>
        }
        label="Name"
    />
</FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={bookDate}
                onChange={(value)=>{setBookDate(value); onDateChange(value)}}/>
            </LocalizationProvider>
            
            <TextField name="Time" label="Time" variant="outlined" placeholder="Time" 
            value={time} onChange={(e)=>{setTime(e.target.value); onTimeChange(e.target.value)}}></TextField>

            <TextField name="Tel" label="Tel" variant="outlined" placeholder="Tel"
            value={tel} onChange={(e)=>{setTel(e.target.value); onTelChange(e.target.value)}}></TextField>

            <TextField name="Person" label="Guest Number" variant="outlined" placeholder="Guest Number" 
            value={person} onChange={(e)=>{setPerson(e.target.value); onPersonChange(e.target.value)}}></TextField>


            
        </div>
    )
}