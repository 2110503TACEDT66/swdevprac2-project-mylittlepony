'use client'

import Image from "next/image";
import styles from "./banner.module.css"
import Link from "next/link";

export default function Banner () {
    return (
        <div>
            <Image src = '/img/cover.jpg'
                alt = 'cover'
                fill = {true}
                priority
                objectFit="cover"
            />
            <div className={styles.bannerText}>
                <div className="text-4xl md:text-5xl lg:text-6xl my-2">
                    Skip the Lines,
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl text-white my-2">
                    Savor the flavors
                </div>
                <div className="text-sm md:text-base lg:text-lg text-white my-2">
                    Reserve your dining experiece
                </div>
                <Link href="/restaurant">
                    <button className={styles.bannerButton}>
                        EXPLORE
                    </button>
                </Link>
            </div>
        </div>
    );
}


