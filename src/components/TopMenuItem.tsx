'use client'

import Link from "next/link";
import styles from './topmenu.module.css'
import Image from "next/image";

export default function TopMenuItem ({ title, pageRef, imgSrc} : { title? : string, pageRef? : string, imgSrc? : string}) {
    let content;
    if(imgSrc && pageRef && title){
        content =<Link href = {pageRef}>
                    <Image src={imgSrc} alt={title} height={25} width={25} className="m-2"/>
            </Link>
    }else if(title && pageRef){
        content = <div className = {styles.itemcontainer}>
            <Link href = {pageRef} className="m-2">
                {title}
            </Link>
        </div>
    }else{
        content = <div className="m-2">
                    {title}
                </div>
    }
    return (
        <div>
            {content}
        </div>
    );
}