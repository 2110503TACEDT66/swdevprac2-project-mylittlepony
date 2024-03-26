import Image from "next/image"
import getHospital from "@/libs/getRestaurant"
import Link from "next/link"
import getRestaurant from "@/libs/getRestaurant"
import styles from './page.module.css'
import { Rating } from "@mui/material"

export default async function HospitalDetailPage( {params} : {params: {rid:string}}) {
    
    const restaurantDetail = await getRestaurant(params.rid)
    console.log(restaurantDetail.averageRating)
    return(
        <main className={styles.page}>
            <div className={styles.content}>
                {/* <Image src = { restaurantDetail.data.picture } */}
                <Image src = {'https://drive.google.com/uc?id=1dSQJh0-e83kq1k2nNeWgxDW6WltYcamm'}
                alt = 'Restaurant Image'
                width={0}
                height={0}
                sizes = "100vw"
                className="rounded-lg w-[50%]"/>
                <div className={styles.text}>
                <div className="text-3xl md:text-4xl lg:text-5xl my-1 md:my-2 lg:my-3">{ restaurantDetail.data.name } </div>
                <div className="flex justify-left">
                    <span className="mr-2">{restaurantDetail.averageRating}</span><Rating className="mb-3 md:mb-5 lg:mb-8" name="rating" defaultValue={restaurantDetail.averageRating} precision={0.1} readOnly />
                </div>
                <div className="text-sm md:text-base lg:text-lg my-1 md:my-3 lg:my-5">Address: { restaurantDetail.data.address } </div>
                <div className="text-sm md:text-base lg:text-lg my-1 md:my-3 lg:my-5">Open-Close: {restaurantDetail.data.opentime} - {restaurantDetail.data.closetime}</div>
                <div className="text-sm md:text-base lg:text-lg my-1 md:my-3 lg:my-5">Tel: { restaurantDetail.data.tel } </div>
                <Link href={`/reservations?id=${params.rid}&restaurant=${restaurantDetail.data.name}`}>
                    <button className={styles.infoButton}>
                        RESERVE NOW
                    </button>
                </Link>
                </div>
            </div>
            
        </main>
    )
}