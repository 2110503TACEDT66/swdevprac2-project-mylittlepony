import { useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import removeReview from "@/libs/removeReview"
import getReviews from "@/libs/getReviews"
import { getSession, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { ReviewJson } from "../../interface"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import styles from "./reservationlist.module.css"
import { Rating } from "@mui/material"
import CancelReview from "./CancelReview"

export default async function ReviewList({reviewsJson}: {reviewsJson: ReviewJson}) {
    
    const reviewsItem = await reviewsJson

    return (
        <main className={styles.page}>
        <>
        { reviewsItem.data.length === 0 ? (
            <div className="text-xl text-center">No Table  </div>
        )
        :
        (
            reviewsItem.data.map((reviewItem: any) => (
                <div className="bg-slate-600 rounded px-5 mx-5 py-5 my-6"
                    key = { reviewItem._id }>
                        <div className="text-md">Rating: <Rating name="rating" 
                    defaultValue={reviewItem.rating} precision={0.5} readOnly /></div>
                        <div className="text-md">Description: {reviewItem.description} </div>
                        <CancelReview reviewId={reviewItem._id}/>
                </div>
            ))
        )}
        </>
        </main>
    )
}