import getRestaurants from "@/libs/getRestaurants";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material"
import RestaurantCatalog from "@/components/RestaurantCatalog";
import styles from "./page.module.css"

export default async function Hospital() {

    const restaurants = await getRestaurants()

    return (
        <main className={styles.page}>
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <RestaurantCatalog restaurantsJson={restaurants}/>
            </Suspense>
        </main>
    )
}