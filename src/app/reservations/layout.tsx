import { ReactNode } from "react";
import styles from './reservations.module.css'

export default function ReservationLayout ( {children}: {children:ReactNode}) {
    return (
        <div className={styles.sectionlayout}>
            {children}
        </div>
    )
}