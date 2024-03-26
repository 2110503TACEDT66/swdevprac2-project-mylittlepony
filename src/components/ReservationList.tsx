import { useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import removeReservation from "@/libs/removeReservation"
import getReservations from "@/libs/getReservations"
import { getSession, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { ReservationJson } from "../../interface"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import CancelButton from "./CancelButton"
import styles from "./reservationlist.module.css"

export default async function ReservationList({reservationsJson}: {reservationsJson: ReservationJson}) {
    
    const reservationsItem = await reservationsJson

    return (
        <main className={styles.page}>
        <>
        { reservationsItem.count === 0 ? (
            <div className="text-xl text-center">No Table  </div>
        )
        :
        (
            reservationsItem.data.map((reservationItem: any) => (
                <div className="rounded px-5 mx-5 py-2 my-2 text-white border border-white"
                    key = { reservationItem.user }>
                        <div className="text-md">{reservationItem.reservationDate} | {reservationItem.time}</div> 
                        <div className="text-md" style={{ borderTop: '1px solid white'  }}>{reservationItem.person} Person
                        </div>
                        <div className="text-md">Tel: {reservationItem.tel} 
                        </div>
                        <CancelButton reservationId={reservationItem._id}/>
                </div>
            ))
        )}
        </>
        </main>
    )
}