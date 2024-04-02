'use client';
import Image from 'next/image';
import { MdAccountCircle } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { FaCamera } from 'react-icons/fa6';
import { UploadButton } from '../utils/uploadthings';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '../components/Loading';

function Page() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem('name', JSON.stringify({ name, image }));
      setLoading(false);
      router.push('/route');
    }, 1000);
  };

  const handleLogout = async () => {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('routeData');
    localStorage.removeItem('data');
    router.push('/');
  };

  return (
    <main className="bg-[var(--secondary)] w-screen h-screen flex flex-col items-center">
      <div className="border-b-2 border-[#464646] bg-[#202020] w-full flex justify-between items-center px-6 py-4">
        <Image
          src="/fastroute.png"
          alt="logo"
          priority
          width={80}
          height={80}
          className="w-auto h-auto"
        />
        <div className="relative flex bg-[#464646] w-32 h-10 rounded-full items-center">
          <span className="absolute top-2 right-14 text-[#868686]">Active</span>
          <div className="absolute top-3 right-4 w-4 h-4 rounded-full bg-green-400 animate-ping"></div>
          <div className="absolute top-3 right-4 w-4 h-4 rounded-full bg-green-400"></div>
        </div>
      </div>

      <div className="flex flex-col p-6 gap-8 w-full items-center justify-between h-full">
        <label htmlFor="" className="w-full flex flex-col gap-2">
          Choose your display name
          <input
            onChange={handlechange}
            type="text"
            className="bg-[#262626] border-2 border-[#464646] outline-none h-10 rounded-md px-2"
          />
        </label>

        <div className="flex flex-col gap-6 w-full items-center">
          <label className="relative flex flex-col items-center w-[50%]">
            <div className="w-52 h-52 flex justify-center items-center">
              {image ? (
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className="bg-cover bg-center bg-no-repeat w-[200px] h-[200px] rounded-full border-4 border-gray-300"
                ></div>
              ) : (
                <MdAccountCircle size={240} className="text-[#464646]" />
              )}
            </div>
            <UploadButton
              className="opacity-0 absolute"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setImage(res[0].url);
              }}
              onUploadError={(error: Error) => {
                alert(`Limite máximo de upload atingido!`);
              }}
            />
            <div className="bg-[var(--fourth)] rounded-full p-3 absolute bottom-0 right-2">
              <FaCamera size={28} className="text-white" />
            </div>
          </label>
          <div className="flex border-2 border-dashed border-[#464646] h-10 rounded-md px-2 justify-center items-center w-full">
            <p>{name}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full items-center justify-center">
          <button
            type="button"
            className="bg-transparent border-2 border-white text-white h-12 rounded-md font-semibold w-full uppercase"
          >
            Weekly plan for $ 10.00
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className={
              isActive
                ? 'bg-[#ff7816] text-white h-12 rounded-md font-semibold flex justify-center items-center w-full'
                : 'bg-[#464646] text-[#686868] h-12 rounded-md font-semibold w-full'
            }
          >
            {loading ? <Loading /> : 'Choose Route'}
          </button>

          <div onClick={handleLogout} className="flex gap-4 text-[#868686]">
            <FiLogOut size={24} className="text-[#868686]" />
            Logout
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
