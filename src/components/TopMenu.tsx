'use client'
import { useSession } from "next-auth/react";
import TopMenuItem from "./TopMenuItem";
import styles from "./topmenu.module.css"

export default function TopMenu () {
    const {data: session} = useSession()
    return (
        <div className={styles.menucontainer}>
            <div className={styles.containerleft}>
                <TopMenuItem title="MyLittlePony"/>
            </div>
            <div className={styles.containercenter}>
                <TopMenuItem title="HOME" pageRef="/"/>
                <TopMenuItem title="REVIEW" pageRef="/"/>
                <TopMenuItem title="RESERVE" pageRef="/myreservation"/>
            </div>
            <div className={styles.containerright}>
                <TopMenuItem title="explore" pageRef="/restaurant" imgSrc="/img/explore.png"/>
                {
                    session?<TopMenuItem pageRef="/myprofile" imgSrc="/img/user.png" title="user"/>:
                    <TopMenuItem pageRef="/signin" imgSrc="/img/user.png" title="user"/>
                }
                {
                    session?<div>{session.user?.data.name}</div>:null
                }
            </div>
        </div>
    );
}