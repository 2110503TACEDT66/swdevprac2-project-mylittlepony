import Image from "next/image"
import getHospital from "@/libs/getRestaurant"
import Link from "next/link"

export default async function HospitalDetailPage( {params} : {params: {hid:string}}) {
    
    const hospitalDetail = await getHospital(params.hid)
   
    return(
        <main className="text-center p-5">
            
            <div className="flex flex-row my-5">
                <Image src = { hospitalDetail.data.picture }
                alt = 'Hospital Image'
                width={0}
                height={0}
                sizes = "100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left"> { hospitalDetail.data.name } 
                <div className="text-md mx-5">Address: { hospitalDetail.data.address } </div>
                <div className="text-md mx-5">District: { hospitalDetail.data.district } </div>
                <div className="text-md mx-5">Province: { hospitalDetail.data.province } </div>
                <div className="text-md mx-5">PostalCode: { hospitalDetail.data.postalcode } </div>
                <div className="text-md mx-5">Tel: { hospitalDetail.data.tel } </div>
                
                </div>
            </div>
            
        </main>
    )
}