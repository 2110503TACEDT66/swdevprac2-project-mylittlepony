'use client'
import { GetServerSideProps } from 'next';
import { getSession, signIn, useSession } from 'next-auth/react';
import styles from './register.module.css'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Rating from '@mui/material/Rating';
import { useSearchParams } from 'next/navigation';

const SigninPage: React.FC = () => {
    const {data: session} = useSession()
    const urlParams = useSearchParams()
    const restaurantId = urlParams.get('id')
    const [value, setValue] = React.useState<number | null>(null);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const rating = formData.get('rating') as any
        const description = formData.get('description') as string;
        const createdAt = new Date()
        try {
            const response = await fetch(`http://localhost:5000/api/v1/restaurants/${restaurantId}/reviews`, {
                method: 'POST',
                headers: {
                    "authorization": `Bearer ${session?.user.token}`,
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({description, rating, restaurantId, createdAt}),
            });
            if (!response.ok) {
                throw new Error('Failed to create review');
            }
            window.location.href = 'http://localhost:3000/'
        } catch (error) {
            console.log(error);
            console.log('fail');
        }
    };

    return (
        <div className={styles.signinContainer}>
            <h1 className='text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 lg:mb-8'>Review</h1>
            <form onSubmit={handleSubmit} className='flex flex-col align-center justify-center items-center'>
                <Rating name="rating" onChange={(event:any, newValue:any) => {
                    setValue(newValue);
                    }} precision={0.5}/>
                    <input type="description" name="description" placeholder="Description" className={styles.inputField} required />
                <button type="submit" className={styles.buttonField}>Review →</button>
            </form>
        </div>
    );
};

export default SigninPage;