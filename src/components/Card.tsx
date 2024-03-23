import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';


export default function Card( { hospitalName , imgSrc, initialRating,onRatingChange, onClick} : {hospitalName:string, imgSrc:string, initialRating?:number, onRatingChange?: (hospitalName: string, rating: number) => void , onClick?: (hospitalName: string) => void;
 } ) {
    // const [value, setValue] = useState<number | null>(initialRating);

    // useEffect(() => {
    //     console.log(`init rating of ${hospitalName} = `,initialRating)
    //     // setValue(initialRating);
    // }, [initialRating]);

    return (
        <InteractiveCard contentName={hospitalName}>
            <div className='w-full h-[60%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            
            <div className='w-full h-[25%] p-[10px] font-semibold'>
                {hospitalName}
            </div>

        {
            (initialRating !== undefined || onRatingChange) && (<div className='w-full h-[10%]'>
           
            <Rating
                 name = {hospitalName + " Rating"}
                 id = {hospitalName + " Rating"}
                 data-testid = {hospitalName + " Rating"}
                 value = {initialRating ?? 0}
                 
                 onChange={(event, newValue) => { onRatingChange && onRatingChange(hospitalName, newValue ?? 0); 
                    // setValue(newValue); 
                }}
                 onClick={ (e)=> {e.stopPropagation(); }}/>
             </div> )
        }

        </InteractiveCard>
    );
} 