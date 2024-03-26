'use client'
import React from 'react';
import removeReservation from "@/libs/removeReservation";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { useSession } from 'next-auth/react';

interface CancelButtonProps {
    reservationId: string;
}

const CancelButton: React.FC<CancelButtonProps> = ({ reservationId }) => {

    const {data: session} = useSession()
    if(!session){
        return null
    }

    const handleCancelReservation = async () => {
        await removeReservation(session?.user.token, reservationId);
        window.location.reload();
    };

    return (
        <button
            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            onClick={handleCancelReservation}
        >
            Cancel
        </button>
    );
};

export default CancelButton;