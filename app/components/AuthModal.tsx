'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '../components/Loading';
import useAuthModal from '@/hooks/useAuthModal';

import Modal from './Modal';

const AuthModal = () => {
  const router = useRouter();
  const { onClose, isOpen } = useAuthModal();
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  useEffect(() => {
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailregex.test(formData.email) && formData.password.length >= 6) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [router, onClose, formData]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/menu');
      onClose();
    }, 1000);
  };

  return (
    <Modal
      title="Welcome back!"
      description="Login to your account."
      isOpen={isOpen}
      onChange={onChange}
    >
      <form className="flex flex-col gap-4 w-full">
        <label htmlFor="email" className='w-full flex flex-col gap-2'>
          Email address
          <input type="email" name="email" id="email" value={formData.email} onChange={(e) => handleChange(e)} className='bg-transparent border-2 border-[#686868] h-12 rounded-lg pl-4'/>
        </label>
        <label htmlFor="email" className='w-full flex flex-col gap-2'>
          You password
          <input type="password" name="password" id="password" value={formData.password} onChange={(e) => handleChange(e)}className='bg-transparent border-2 border-[#686868] h-12 rounded-lg pl-4' />
        </label>
        <button
          type="button"
          className={
            isDisabled
              ? 'bg-[#464646] text-[#686868] h-12 rounded-md font-semibold'
              : 'bg-[#ff7816] text-white h-12 rounded-md font-semibold flex justify-center items-center'
          }
          onClick={() => handleSubmit()}
          disabled={isDisabled}
        >
          {loading ? <Loading /> : 'Sign in'}
        </button>
      </form>
    </Modal>
  );
};

export default AuthModal;
