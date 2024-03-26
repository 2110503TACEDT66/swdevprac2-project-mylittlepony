import { useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import removeReservation from "@/libs/removeReservation"
import getReservations from "@/libs/getReservations"
import { getSession, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { ReservationJson, ReviewJson } from "../../interface"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import CancelButton from "./CancelButton"
import styles from "./reservationlist.module.css"
import { Rating } from "@mui/material"

export default async function ReviewList({reviewsJson}: {reviewsJson: ReviewJson}) {
    
    const reservationsItem = await reviewsJson

    return (
        <main className={styles.page}>
        <>
        { reservationsItem.data.length === 0 ? (
            <div className="text-xl text-center">No Table  </div>
        )
        :
        (
            reservationsItem.data.map((reservationItem: any) => (
                <div className="bg-slate-200 rounded px-5 mx-5 py-5 my-4"
                    key = { reservationItem._id }>
                        <div className="text-md">Rating: <Rating name="rating" 
                    defaultValue={reservationItem.rating} precision={0.5} readOnly /></div>
                        <div className="text-md">Description: {reservationItem.description} </div>
                </div>
            ))
        )}
        </>
        </main>
    )
}