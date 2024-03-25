import Link from "next/link";
import Card from "./Card";

interface Hospital{
    id:string
    name: string;
    picture: string;
}

interface Props{
    hospitalsJson:{
        count: number;
        data: Hospital[];
    };
}

export default async function HospitalCatalog({hospitalsJson} : Props) {
    const hospitalJsonReady = await hospitalsJson
    
    return (
        <>
        Explore { hospitalJsonReady.count } hospitals in our catalog
        <div style = {{margin:"20px" , display: "flex" , flexDirection:"row",
        flexWrap:"wrap" , justifyContent:"space-around" , alignContent:"space-around"}}>
            
            {
                hospitalJsonReady.data.map((hospitalItem: any) => (
                    <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
                    <Card hospitalName = {hospitalItem.name} imgSrc={hospitalItem.picture}/>
                    </Link>
                ))
            }

        </div>
        </>
    )
}