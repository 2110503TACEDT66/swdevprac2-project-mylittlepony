import Image from "next/image";
import { RestaurantJson } from "../../interface";
import Link from "next/link";
import styles from "./restaurant.module.css"
import { ClassNames } from "@emotion/react";

export default async function RestaurantCatalog({restaurantsJson}: {restaurantsJson: RestaurantJson}) {
    const restaurants = await restaurantsJson
    return (
        <div>
        <div className={styles.restaurant}>
            <h1 className={styles.header}>
                Let's explore our restaurant
            </h1>
        </div>
            <div className={styles.restaurantCatalog}>
            {
                restaurants.data.map((restaurantItem: any) => (
                    <div className={styles.restaurant}>
                        <div className={styles.imageContainer}>
                        <Image src={restaurantItem.picture} alt={restaurantItem.name}
                                layout="responsive"
                                width={800} // Set a fixed width for large screens
                                height={600} // Set a fixed height for large screens
                                sizes="(max-width: 600px) 100vw, 80vw" // Adjust this according to your design
                                objectFit="cover"
                                loading="lazy"
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
