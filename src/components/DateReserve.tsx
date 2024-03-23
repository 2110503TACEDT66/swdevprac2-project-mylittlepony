'use client'
import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select , MenuItem, TextField } from '@mui/material'
import { Dayjs } from "dayjs"


export default function DateReserve({onDateChange, onHospitalChange, onNameChange, onSurnameChange, onCitizenIdChange}
    : {onDateChange:Function ,onHospitalChange:Function,onNameChange:Function, onSurnameChange:Function, onCitizenIdChange:Function}) {
    
    const [bookDate, setBookDate ] = useState<Dayjs|null>(null)
    const [hospital, setHospital] = useState<string|null>(null)
    const [name, setName] = useState<string|null>(null)
    const [surname, setSurname] = useState<string|null>(null)
    const [citizenid, setCitizenId] = useState<string|null>(null)

    return(
        <div className = "bg-slate-100 rounded-lg space-y-2 w-fit px-10 py-5 flex flex-col justify-center align-center">
            
            <TextField name="Name" label="Name" variant="standard" placeholder="Name"
            value={name} onChange={(e)=>{setName(e.target.value); onNameChange(e.target.value)}} ></TextField>

            <TextField name="Lastname" label="Lastname" variant="standard" placeholder="Lastname" 
            value={surname} onChange={(e)=>{setSurname(e.target.value); onSurnameChange(e.target.value)}}></TextField>

            <TextField name="Citizen ID" label="Citizen ID" variant="standard" placeholder="Citizen ID"
            value={citizenid} onChange={(e)=>{setCitizenId(e.target.value); onCitizenIdChange(e.target.value)}}></TextField>
        
            <Select variant="standard" name="hospital" id="hospital"
             value={hospital}
             onChange={ (e)=>{setHospital(e.target.value); onHospitalChange(e.target.value) }}
            className="h-[2em] w-auto">
                <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
            </Select>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={bookDate}
                onChange={(value)=>{setBookDate(value); onDateChange(value)}}/>
            </LocalizationProvider>
        </div>
    )
}