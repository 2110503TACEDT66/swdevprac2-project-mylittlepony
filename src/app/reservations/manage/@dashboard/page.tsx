import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import Restaurant from "@/db/models/Restaurant"
import { dbConnect } from "@/db/dbConnect"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { AccessTime, InsertLink, LocalPhoneOutlined } from "@mui/icons-material"
import React from "react"

export default async function DashboardPage() {

    const addRestaurant = async (addRestaurantForm:FormData) => {
        "use server"
        const name = addRestaurantForm.get("name")
        const address = addRestaurantForm.get("address")
        const picture = addRestaurantForm.get("picture")
        const tel = addRestaurantForm.get("tel")
        const opentime = addRestaurantForm.get("opentime")
        const closetime = addRestaurantForm.get("closetime")

        try {
            await dbConnect()
            const restaurant = await Restaurant.create({
                "name": name,
                "address": address,
                "picture": picture,
                "tel": tel,
                "opentime": opentime,
                "closetime": closetime
            })
        }
        catch(error){
            console.log(error)
        }
        revalidateTag("restaurants")
        redirect("/restaurant")
        
    }
    const session = await getServerSession(authOptions)
    if(!session|| !session.user.token) return null

    const profile = await getUserProfile(session.user.token)

    return (
        <main className="flex justify-center items-center h-full ">
            {
                (profile.data.role == "admin")?
                <form action={addRestaurant}>
                    
                    <FormControl sx={{ m: 1, width: '100%', backgroundColor: 'white' }} variant="outlined">
                        <InputLabel sx={{ color: '#111113', opacity: 0.6, '&.Mui-focused': { color: 'gray' } }}
                        >Restaurant Name</InputLabel>
                        <OutlinedInput label="Restaurant Name" required id="name" name="name"
                            sx={{'& fieldset': {borderColor: '#D9D9D9 !important', },
                            }}
                        />
                    </FormControl>
                            
                
                    <FormControl sx={{ m: 1, width: '100%', backgroundColor: 'white' }} variant="outlined">
                        <InputLabel sx={{ color: '#111113', opacity: 0.6, '&.Mui-focused': { color: 'gray' } }}
                        >Address</InputLabel>
                        <OutlinedInput label="Address" required id="address" name="address"
                            sx={{'& fieldset': {borderColor: '#D9D9D9 !important', },
                            }}
                        />
                    </FormControl>

                    <div className="flex">
      
                    <FormControl sx={{ m: 1, width: '35ch', backgroundColor: 'white' }} variant="outlined">
                        <InputLabel sx={{ color: '#111113', opacity: 0.6, '&.Mui-focused': { color: 'gray' } }}
                        >Picture URL</InputLabel>
                        <OutlinedInput label="Picture URL" required id="picture" name="picture"
                            endAdornment={
                                <InputAdornment position="end" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <InsertLink style={{ color: 'grey' }} />
                                </InputAdornment>                                }
                            sx={{'& fieldset': {borderColor: '#D9D9D9 !important', },
                            }}
                        />
                    </FormControl>

                    <FormControl sx={{ m: 1, width: '35ch', backgroundColor: 'white' }} variant="outlined">
                        <InputLabel sx={{ color: '#111113', opacity: 0.6, '&.Mui-focused': { color: 'gray' } }}
                        >Phone Number</InputLabel>
                        <OutlinedInput label="Phone Number" required id="tel" name="tel"
                            endAdornment={
                                <InputAdornment position="end" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <LocalPhoneOutlined style={{ color: 'grey' }} />
                                </InputAdornment>                                }
                            sx={{'& fieldset': {borderColor: '#D9D9D9 !important', },
                            }}
                        />
                    </FormControl>


                    </div>

                    <div className="flex">
      
                    <FormControl sx={{ m: 1, width: '35ch', backgroundColor: 'white' }} variant="outlined">
                        <InputLabel sx={{ color: '#111113', opacity: 0.6, '&.Mui-focused': { color: 'gray' } }}
                        >Open Time</InputLabel>
                        <OutlinedInput label="Open Time" required id="opentime" name="opentime"
                            endAdornment={
                                <InputAdornment position="end" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <AccessTime style={{ color: 'grey' }} />
                                </InputAdornment>                                }
                            sx={{'& fieldset': {borderColor: '#D9D9D9 !important', },
                            }}
                        />
                    </FormControl>

                    <FormControl sx={{ m: 1, width: '35ch', backgroundColor: 'white' }} variant="outlined">
                        <InputLabel sx={{ color: '#111113', opacity: 0.6, '&.Mui-focused': { color: 'gray' } }}
                        >Close Time</InputLabel>
                        <OutlinedInput label="Close Time" required id="closetime" name="closetime"
                            endAdornment={
                                <InputAdornment position="end" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <AccessTime style={{ color: 'grey' }} />
                                </InputAdornment>                                }
                            sx={{'& fieldset': {borderColor: '#D9D9D9 !important', },
                            }}
                        />
                    </FormControl>

                    </div>

                    <button type="submit" className="bg-slate-950 hover:bg-slate-800 text-white p-2 rounded w-full">Add New Restaurant</button>
                </form>
                :null
            }
        </main>
    )
}