import getHospitals from "@/libs/getRestaurants";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material"

export default async function Hospital() {

    const hospitals = await getHospitals()

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium"> Select Your Hospital</h1>
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
            <HospitalCatalog hospitalsJson={hospitals}/>
            </Suspense>
            
        </main>
    )
}