'use client';
import Location from "../icons/Location";
import { AiFillClockCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import useProvider from "../provider/Provider";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ListSectionProps {
    id: string;
}

interface Data {
    letter: string;
    city: string;
    packageNumber: string;
    packageQuantity: string;
}

function ListSection({ id }: ListSectionProps) {
    const [time, setTime] = useState('');
    const [cityId, setCityId] = useState('' as string);
    const [cityName, setCityName] = useState('' as string);
    const router = useRouter();
    const [database, setDatabase] = useState<Data>({
        letter: '',
        city: '',
        packageNumber: '',
        packageQuantity: '',
    });

    const calculateScheduled = () => {
        const hour = new Date().getHours();

        switch (true) {
            case hour >= 0 && hour < 4:
                return '08:00 Today';
            case hour > 4 && hour < 7:
                return '11:00 Today';
            case hour > 7 && hour < 11:
                return '15:00 Today';
            case hour > 11 && hour < 13:
                return '18:00 Today';
            case hour > 13 && hour < 19:    
                return '22:00 Today';
            default:
                return '00:00 Today';
        }
    };
    const vencimento = calculateScheduled();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('routeData') || '{}' as string);
        const time = JSON.parse(localStorage.getItem('time') || '{}');
        const cityId = JSON.parse(localStorage.getItem('cityId') || '{}');
        const cityName = JSON.parse(localStorage.getItem('cityName') || '{}');
        if (!data) {
            router.push('/route');
        }
        setTime(time);
        setDatabase(data);
        setCityId(cityId);
        setCityName(cityName);
    }, [router]);    


    function generateRandomNumber() {
        return Math.floor(1000 + Math.random() * 9000);
      }

    const arrayAddress = (address: string) => {
        const quantity = Number(database.packageQuantity);
        const array = [];
        for (let i = 0; i < quantity; i++) {
            array.push({
                id: i + 2,
                address: `${generateRandomNumber()} HEMING AVE`,
            });
        }
        return array;
    };

    return (
        <div id={id} className="flex flex-col w-full">
            <div className="w-full h-[130px] bg-gray-200 relative flex text-sm">
                <div className="relative ml-2 py-8">
                    <span className="z-30 absolute left-[0.6rem] top-[2.1rem] text-[12px]">1</span>
                    <FaCheckCircle size={10} className="absolute left-[1.2rem] text-[#07AB51]" />
                    <Location w={26} h={26} fill="#c4c8d1" />
                    <div className="absolute left-[13px] top-0 border-l-[1px] border-[#c4c8d1] h-full"></div>
                </div>
                <div className="relative text-gray-500 w-full font-semibold gap-2 ml-4 flex flex-col justify-center border-b border-[#c4c8d1] text-xs">
                    <p>Picked up at <span>{time}</span></p>
                    <p>6885 Commercial Dr.</p>
                    <p className="uppercase">{ Number(cityId) <= 39 ? 'SPRINGFIED' : 'ELKRIDGER' }</p>
                </div>
            </div>
            {
                arrayAddress(database.city).map((item, index) => (
                    <div key={index} className="z-[-70] w-full h-[110px] relative flex text-sm">
                        <div className="relative ml-2 py-8">
                            <span className={ item.id > 9 ? "z-[100] absolute order-2 left-[0.4rem] top-[2.1rem] text-[12px]" : "z-[100] absolute order-2 left-[0.55rem] top-[2.1rem] text-[12px]"}>{item.id}</span>
                            <Location w={26} h={26} fill={ index === 0 ? "#07AB51" : "#464747" } />
                            <div className="absolute z-[-50] left-[13px] top-0 border-l-[1px] border-[#c4c8d1] h-full"></div>
                        </div>
                        <div className="relative text-gray-600 w-full font-semibold ml-4 flex flex-col justify-center gap-2 border-b border-[#c4c8d1] text-xs">
                            <div className="flex items-center gap-1">
                                <AiFillClockCircle className="text-[#42aaff]" />
                                <span className="ml-1"># {database.letter}.{database.packageNumber}.OV • Scheduled 0:01 - {vencimento}</span>
                            </div>
                            <p>{item.address}</p>
                            <p className="uppercase">{cityName}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ListSection;