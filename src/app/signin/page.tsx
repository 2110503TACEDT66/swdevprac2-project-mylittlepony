'use client'
import { GetServerSideProps } from 'next';
import { getSession, signIn } from 'next-auth/react';
import styles from './signin.module.css'
import { useState } from 'react';
import Link from 'next/link';

const SigninPage: React.FC = () => {
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        try {
            const response = await fetch('http://localhost:5000/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                throw new Error('Failed to sign in');
            }
            await signIn('credentials', { email, password, callbackUrl: '/' });
        } catch (error) {
            setError("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className={styles.signinContainer}>
            <h1 className='text-4xl md:text-5xl lg:text-6xl mb-10 md:mb-12 lg:mb-14'>Sign In</h1>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input type="email" name="email" placeholder="&#9993; Email" className={styles.inputField} required />
                <input type="password" name="password" placeholder="Password" className={styles.inputField} required />
                {
                    error && <div>{error}</div>
                }
                <button type="submit" className={styles.buttonField}>Sign In →</button>
            </form>
            <div className={styles.register}>
                Not a member?{' '}
                <Link href='/register'>
                    <button className='text-black underline decoration-inherit hover:text-gray-700'>Create an account</button>
                </Link>
            </div>
        </div>
    );
};

export default SigninPage;