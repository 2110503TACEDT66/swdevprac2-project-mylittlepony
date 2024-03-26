import BookingList from "@/components/BookingList"
import getReservations from "@/libs/getReservations"
import { LinearProgress } from "@mui/material"
import { getServerSession } from "next-auth"
import { Suspense } from "react"
import { authOptions } from "../api/auth/[...nextauth]/route"
export default async function CartPage(){

    const session = await getServerSession(authOptions)
    if(!session|| !session.user.token) return null

    const reservations = await getReservations(session.user.token)

    return (
        <main>
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <BookingList reservationsJson={reservations}/>
            </Suspense>
        </main>
    )
}