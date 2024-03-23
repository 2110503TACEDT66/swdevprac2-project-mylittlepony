'use client'
import { useReducer } from "react"
import Card from "./Card"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import getHospitals from "@/libs/getRestaurants"
 
export default function CardPanel() {

    const [hospitalResponse, setHospitalResponse] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const hospitals = await getHospitals()
            setHospitalResponse(hospitals)
        }
        fetchData()
    }, [])

    const initialState = initializeRatings();
    
    const compareReducer = (compareList:Map<string ,number>, action:{type:'add',hospitalName:string, rating: number} | {type:'remove',hospitalName:string}) => {
        switch(action.type) {
            case 'add': {
                return new Map( compareList.set(action.hospitalName , action.rating) )
            }
            case 'remove' : {
                compareList.delete(action.hospitalName)
                return new Map(compareList);
            }
            default: return compareList
        }
    } 

    const [ List , dispatch ] = useReducer(compareReducer,initialState )

    function initializeRatings() {
        const initialRatings = new Map<string, number>();
        initialRatings.set('Chulalongkorn Hospital', 5);
        initialRatings.set('Rajavithi Hospital', 5);
        initialRatings.set('Thammasat University Hospital', 5);
        return initialRatings;
    }
    
    function handleRatingChange(hospitalName: string, rating: number) {
        dispatch({ type: 'add', hospitalName, rating });
    }

    function handleHospitalClick(hospitalName: string) {
        handleRatingChange(hospitalName, 0);
        dispatch({ type: 'remove', hospitalName});
    }
    const ratingsArray = Array.from(List.entries());
  

    return(
        <div>
          { ratingsArray.map( ([hospitalName, rating]) => <div key = {hospitalName} 
            onClick={() => handleHospitalClick(hospitalName)}
            data-testid={hospitalName}>
            {hospitalName} Rating : {rating} </div> )}   
        </div>
    )
}