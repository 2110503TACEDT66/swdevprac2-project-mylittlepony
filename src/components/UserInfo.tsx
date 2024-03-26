'use client'

import styles from "./banner.module.css"
import { useSession } from "next-auth/react";


export default function UserInfo() {
    const { data: session } = useSession()

    var createdAt = session?.user?.data?.createdAt ? new Date(session.user.data.createdAt) : null;
      
    return (
        <div>
            <div className={styles.bannerText}>
                <div className="text-4xl md:text-5xl text-left py lg:text-6xl my-2">
                    User Profile
                </div>
                {
                    session?(<table className="table-auto border-separate border-spacing-2"><tbody>
                        <tr><td>Name</td><td>{session.user?.data.name}</td></tr>
                        <tr><td>Tel</td><td>{session.user?.data.tel}</td></tr>
                        <tr><td>Email</td><td>{session.user?.data.email}</td></tr>
                        <tr><td>Role</td><td>{session.user?.data.role}</td></tr>
                        <tr><td>Member Since</td><td>{createdAt?.toString()}</td></tr>
                    </tbody></table>):(<div>User is not logged in</div>)
                }
            </div>
        </div>
    );
}