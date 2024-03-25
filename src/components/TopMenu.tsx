import TopMenuItem from "./TopMenuItem";
import styles from "./topmenu.module.css"

export default function TopMenu () {
    return (
        <div className={styles.menucontainer}>
            <div className={styles.containerleft}>
                <TopMenuItem title="MyLittlePony"/>
            </div>
            <div className={styles.containercenter}>
                <TopMenuItem title="HOME" pageRef="/"/>
                <TopMenuItem title="ABOUT US" pageRef="/"/>
                <TopMenuItem title="RESERVE" pageRef="/"/>
            </div>
            <div className={styles.containerright}>
                <TopMenuItem title="explore" pageRef="/restaurants" imgSrc="/img/explore.png"/>
                <TopMenuItem pageRef="/" imgSrc="/img/user.png" title="user"/>
            </div>
        </div>
    );
}