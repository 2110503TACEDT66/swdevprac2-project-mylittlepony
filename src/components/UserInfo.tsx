'use client'

import Link from "next/link";
import styles from "./banner.module.css"
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";


export default function UserInfo() {
    const { data: session } = useSession()

    var createdAt = session?.user?.data?.createdAt ? new Date(session.user.data.createdAt) : null;

    const handleSignOut = async () => {
        await signOut({ redirect: false, callbackUrl: '/' });
        window.location.href = 'http://localhost:3000/'
    };

    return (
        <div>
            <div className={styles.bannerText}>
                <div className="text-4xl md:text-5xl text-left py lg:text-6xl my-2 text-black">
                    User Profile
                </div>
                {
                    session?(<table className="table-auto border-separate border-spacing-2 text-black"><tbody>
                        <tr><td>Name</td><td>{session.user?.data.name}</td></tr>
                        <tr><td>Tel</td><td>{session.user?.data.tel}</td></tr>
                        <tr><td>Email</td><td>{session.user?.data.email}</td></tr>
                        <tr><td>Role</td><td>{session.user?.data.role}</td></tr>
                        <tr><td>Member Since</td><td>{createdAt?.toString()}</td></tr>
                    </tbody></table>):(<div className="text-black md:text-xl">User is not logged in</div>)
                }
                <button className={styles.buttonField} onClick={() => handleSignOut()}>Sign Out</button>
            </div>
        </div>
    );
}