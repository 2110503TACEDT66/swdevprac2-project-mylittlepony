'use client'
import React from 'react';
import removeReview from "@/libs/removeReview";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { useSession } from 'next-auth/react';

interface CancelButtonProps {
    reviewId: string;
}

const CancelReview: React.FC<CancelButtonProps> = ({ reviewId }) => {

    const {data: session} = useSession()
    if(!session){
        return null
    }

    const handleCancelReview = async () => {
        await removeReview(session?.user.token, reviewId);
        window.location.reload();
    };

    return (
        <button
            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            onClick={handleCancelReview}
        >
            Cancel
        </button>
    );
};

export default CancelReview;