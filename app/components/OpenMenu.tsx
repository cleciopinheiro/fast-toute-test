'use client';
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import menuModal from "../constants/MenuModal";
import Help from "../icons/Help";
import { useEffect, useState } from "react";

interface OpenMenuProps {
    open?: boolean;
    onClick?: () => void;
    onBadge?: () => void;
}

function OpenMenu({ open, onClick, onBadge }: OpenMenuProps) {
    const [data, setData] = useState({
        image: '',
        name: '',
    });

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('name') || '{}');
        setData(data);
    }, []);

    return (
        <div onClick={ onClick } className={
            open
            ? 'w-screen h-screen bg-[rgba(0,0,0,0.5)] z-50 fixed top-0 left-0'
            : 'w-screen h-screen bg-[rgba(0,0,0,0)] z-50 fixed top-0 left-[-100%]'
        }>
            <div className={
                open
                ? 'fixed left-0 top-0 w-[85%] h-screen bg-[var(--input-color)] ease-in duration-300 flex flex-col'
                : 'fixed left-[-100%] top-0 w-[85%] h-screen bg-[var(--input-color)] ease-in duration-300 flex flex-col'
            }>
                <div className="flex relative">
                    <IoClose onClick={ onClick } size={28} className="text-white m-4 absolute" />
                    <div className="flex flex-col gap-2 w-full items-center justify-center py-4" onClick={ onBadge }>
                        {/* <Image src={data.image} alt="logo" width={60} height={60} className="rounded-full border-2 border-[var(--fourth)]" /> */}
                        <div style={{backgroundImage: `url(${data.image})` }} className='bg-cover bg-center bg-no-repeat w-[60px] h-[60px] rounded-full border-2 border-[var(--fourth)]'></div>
                        <h2>{data.name}</h2>
                    </div>
                </div>
                <div className="flex flex-col h-full w-full mt-4 justify-between">
                    <div className="flex flex-col">
                        {
                            menuModal.map((item, index) => (
                                <div key={index} className="flex items-center py-3 px-4 w-full border-y border-zinc-600">
                                    <a href={item.url} className="text-white text-xs">{item.title}</a>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col">
                        <div className="flex bg-zinc-800 items-center py-3 px-4 w-full border-y border-zinc-600 gap-2">
                            <BiSupport size={20} className="text-[var(--primary)]" />
                            <a href="/driver" className="text-[var(--primary)] text-sm">Driver Support</a>
                        </div>
                        <div className="flex bg-zinc-800 items-center py-3 px-4 w-full border-y border-zinc-600 gap-2">
                            <Help w={20} h={20} fill="#FF7097" />
                            <a href="/help" className="text-[var(--primary)] text-sm">Emergency Help</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OpenMenu;