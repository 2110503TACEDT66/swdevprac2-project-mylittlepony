'use client'
import { GetServerSideProps } from 'next';
import { getSession, signIn } from 'next-auth/react';
import styles from './register.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';

const SigninPage: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const tel = formData.get('tel') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const role = 'user'
        try {
            const response = await fetch('http://localhost:5000/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, tel, email, password, role}),
            });
            if (!response.ok) {
                throw new Error('Failed to register');
            }
            window.location.href = 'http://localhost:3000/signin'
        } catch (error) {
            console.log(error);
            setError("Email already used or password must be at least 6 characters. Please try again.");
        }
    };

    return (
        <div className={styles.signinContainer}>
            <h1 className='text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 lg:mb-8'>Register</h1>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <div>
                    <input type="name" name="name" placeholder="Name" className={styles.inputField} required />
                    <input type="tel" name="tel" placeholder="Telephone" className={styles.inputField} required />
                </div>
                <div>
                    <input type="email" name="email" placeholder="&#9993; Email" className={styles.inputField} required />
                    <input type="password" name="password" placeholder="Password" className={styles.inputField} required />
                </div>
                {
                    error && <div>{error}</div>
                }
                <button type="submit" className={styles.buttonField}>Resgister →</button>
            </form>
        </div>
    );
};

export default SigninPage;