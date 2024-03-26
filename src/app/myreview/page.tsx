import BookingList from "@/components/ReservationList"
import getReservations from "@/libs/getReservations"
import { LinearProgress } from "@mui/material"
import { getServerSession } from "next-auth"
import { Suspense } from "react"
import { authOptions } from "../api/auth/[...nextauth]/route"
import getReviews from "@/libs/getReviews"
import ReviewList from "@/components/ReviewList"
export default async function CartPage(){

    const session = await getServerSession(authOptions)
    if(!session|| !session.user.token) return null

    const reservations = await getReviews(session.user.token)

    return (
        <main>
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <ReviewList reviewsJson={reservations}/>
            </Suspense>
        </main>
    )
}