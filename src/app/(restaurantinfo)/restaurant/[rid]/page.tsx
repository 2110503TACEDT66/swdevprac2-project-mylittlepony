import Image from "next/image"
import Link from "next/link"
import getRestaurant from "@/libs/getRestaurant"
import styles from './page.module.css'
import Rating from "@mui/material/Rating"
import { useSession } from "next-auth/react"

export default async function RestaurantDetailPage( {params} : {params: {rid:string}}) {
    const restaurantDetail = await getRestaurant(params.rid)
    return(
        <main className={styles.page}>
            <div className={styles.content}>
                <Image src = { await restaurantDetail.data.picture }
                alt = 'Restaurant Image'
                width={0}
                height={0}
                sizes = "100vw"
                className="rounded-lg w-[30%]"/>
                <div className={styles.text}>
                <div className="text-3xl md:text-4xl lg:text-5xl my-1 md:my-2 lg:my-3">{ restaurantDetail.data.name } </div>
                <div className="flex justify-left">
                    <span className="mr-2">{restaurantDetail.averageRating}</span><Rating name="rating" 
                    defaultValue={restaurantDetail.averageRating} precision={0.1} readOnly />
                </div>
                <div className="text-sm md:text-base lg:text-lg my-1 md:my-3 lg:my-5">Address: { restaurantDetail.data.address } </div>
                <div className="text-sm md:text-base lg:text-lg my-1 md:my-3 lg:my-5">Open-Close: 
                {restaurantDetail.data.opentime} - {restaurantDetail.data.closetime}</div>
                <div className="text-sm md:text-base lg:text-lg my-1 md:my-3 lg:my-5">Tel: { restaurantDetail.data.tel } </div>
                    <Link href={`/reservations?id=${params.rid}&restaurant=${restaurantDetail.data.name}`}>
                        <button className={styles.infoButton}>
                            RESERVE NOW
                        </button>
                    </Link>
                    <Link href={`/review?id=${params.rid}&restaurant=${restaurantDetail.data.name}`}>
                        <button className={styles.infoButton}>
                            REVIEW
                        </button>
                    </Link>
                </div>
            </div>
            
        </main>
    )
}


