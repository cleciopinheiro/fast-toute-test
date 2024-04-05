'use client';
import Image from "next/image";
import Amazon from "../icons/Amazon";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, motionValue } from "framer-motion";

interface BadgeProps {
    onBadge: () => void;
    open: boolean;
    animate: boolean;
}

function Badge({ onBadge, open, animate}: BadgeProps) {
    const date = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
    const mounth = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric'});
    const year = new Date().getFullYear();

    const [data, setData] = useState({
        image: '',
        name: '',
    })
    const [image, setImage] = useState('' as string);
    const route = useRouter();
    const [disableAxis, setDisableAxis] = useState(false);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('name') || '{}');
        const imageUpload = JSON.parse(localStorage.getItem('image') || '{}');
        setData(data);
        setImage(imageUpload);
    }
    , []);

    const handleCloseMenu = () => {
        onBadge();
    };

    return (
        <div className={
            open
            ? 'fixed w-screen h-screen bg-[rgba(0,0,0,0.5)] z-[75] left-0 bottom-0'
            : 'fixed w-screen h-screen bg-[rgba(0,0,0,0)] z-[75] left-0 bottom-[-100%]'
        }>
            <motion.div
            className={
                open
                ? `fixed bottom-0 left-0 w-full h-[93vh] ${ animate && 'ease-in-out duration-300'}`
                : `fixed bottom-[-150%] left-0 w-full h-[93vh] ${ animate && 'ease-in-out duration-300'}`
            }
            drag={!disableAxis && 'y'}
            onDragStart={(e, { offset, velocity }) => {
                if (offset.y < 0) {
                    setDisableAxis(true);
                    setTimeout(() => {
                        setDisableAxis(false);
                    }, 500);
                }
            }}
            initial={{ y: 0 }}
            animate={{ y: 0, transition: { duration: 1, ease: "easeInOut" }}}
            dragConstraints={{ top: 0, bottom: 0}}
            onDragEnd={(e, { offset, velocity }) => {
                if ( offset.y >  window.innerHeight * 0.1) {
                    setDisableAxis(false);
                    onBadge();
                }
            }}
            >
            <div 
            className={
                open
                ? 'w-full h-[93vh] bg-white flex flex-col rounded-t-xl bg-cover bg-no-repeat bg-center'
                : 'w-full h-[93vh] bg-white flex flex-col bg-cover bg-no-repeat bg-center'
            } style={{backgroundImage: `url('/fundo.webp')`}}>
                <div
                    className="relative flex w-full bg-[var(--fourth)] rounded-t-xl justify-center items-center px-4">
                    <Amazon w={80} h={50} fill="#ffffff" />
                    <IoIosArrowDown size={32} className="absolute right-4" onClick={() => handleCloseMenu()} />
                </div>
                <div className="flex flex-col items-center mt-4 gap-2">
                    <div style={{backgroundImage: `url(${image})` }} className='bg-cover bg-center bg-no-repeat w-[300px] h-[300px] rounded-full border-4 border-gray-300'></div>
                    <h1 className="text-3xl mt-4 text-black">{data.name}</h1>
                    <p className="bg-[var(--fourth)] text-xl">ON DUTY</p>
                    <p className="text-black">{mounth} {year}, {date}</p>
                </div>
                <div className="flex bg-white border-2 border-gray-300 justify-between items-center w-full mt-4 px-4 p-4">
                    <h1 className="uppercase text-black">{`Today's Itinerary`}</h1>
                    <IoIosArrowForward size={20} className="text-black" />
                </div>
            </div>
        </motion.div>
        </div>
    );
}

export default Badge;