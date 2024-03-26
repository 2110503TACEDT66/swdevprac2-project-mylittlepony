import Image from "next/image";
import { ReviewJson } from "../../interface";
import Link from "next/link";
import styles from "./restaurant.module.css"

export default async function ReviewCatalog({reviewsJson}: {reviewsJson: ReviewJson}) {
    const reviews = await reviewsJson
    return (
        <div>
        <div className={styles.restaurant}>
            <h1 className={styles.header}>
                Let's explore our restaurant
            </h1>
        </div>
            <div className={styles.restaurantCatalog}>
            {
                reviews.data.map((restaurantItem: any) => (
                    <div className={styles.restaurant}>
                        <div className={styles.imageContainer}>
                        {/* <Image src={restaurantItem.picture} alt={restaurantItem.name} layout="responsive" width={400} height={600} objectFit="cover"/> */}

                            <Image src={'https://drive.google.com/uc?id=1kTUa-9g6QeeAcXRFX5P8Sj82_dnQniOE'} alt={restaurantItem.name}
                                layout="responsive"
                                width={800} // Set a fixed width for large screens
                                height={600} // Set a fixed height for large screens
                                sizes="(max-width: 600px) 100vw, 80vw" // Adjust this according to your design
                                objectFit="cover"
                            />
                        </div>
                        <div className="text-base sm:text-lg md:text-2xl text-white flex-1">{restaurantItem.name}</div>
                        <Link href={`/restaurant/${restaurantItem._id}`}>
                            <button className={styles.infoButton}>
                                VIEW INFO
                            </button>
                        </Link>
                    </div>
                ))
            }
            </div>
        </div>
    )
}