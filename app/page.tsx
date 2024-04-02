'use client';
import Image from 'next/image';
import useAuthModal from "@/hooks/useAuthModal";
import { useSessionContext } from '@supabase/auth-helpers-react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const authModal = useAuthModal();
  const { session } = useSessionContext();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/menu');
    }
  }, [session, router]);


  return (
    <main className='bg-[var(--secondary)] w-screen h-screen items-center p-6 flex flex-col justify-around'>
      <Image src='/fastroute.png' alt='logo' priority width={140} height={120} className='w-auto h-auto' />
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold text-center'>Your best route option!</h1>
        <Image src='/van.png' alt='image' priority width={380} height={300} className='w-auto h-auto' />
      </div>
      <button
        onClick={authModal.onOpen} 
        type='button' 
        className='bg-[var(--fourth)] w-full rounded-lg h-12 font-semibold'>
          Get Started!
      </button>
    </main>
  );
}
