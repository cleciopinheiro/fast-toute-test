'use client';
import city from '../constants/City';
import letter from '../constants/Letter';
import packageNumber from '../constants/PackageNumber';
import PackageQuantity from '../constants/PackageQuantity';
import Loading from '../components/Loading';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useProvider from '../provider/Provider';

function Page() {
  const [formData, setFormData] = useState({
    letter: '',
    city: '',
    packageNumber: '',
    packageQuantity: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [concatenatedValues, setConcatenatedValues] = useState('');
  const [loading, setLoading] = useState(false);
  const { setData } = useProvider();
  const router = useRouter();
  const hourAndMinutes = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const { letter, city, packageNumber, packageQuantity } = formData;
    setConcatenatedValues(letter + ' ' + city.split(' ')[0] + ' ' + packageNumber);

    if (letter && city && packageNumber && packageQuantity) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formData]);
  
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('routeData', JSON.stringify(formData));
      localStorage.setItem('time', JSON.stringify(hourAndMinutes));
      const cityId = formData.city.split(' ')[1];
      const cityName = formData.city.split(' ')[0];
      localStorage.setItem('cityName', JSON.stringify(cityName));
      localStorage.setItem('cityId', JSON.stringify(cityId));
      setData(formData);
      setLoading(false);
      router.push('/current');
    }, 1000);
  };

  return (
    <div className="bg-[var(--secondary)] flex w-screen h-screen justify-center items-center px-10">
      <form className="flex flex-col gap-6 w-full text-[16px]">
      <h1 className='text-3xl font-semibold text-center mb-6'>Create route</h1>
        <select
          name="letter"
          id="letter"
          className="bg-[#262626] border-2 border-[#464646] outline-none h-10 rounded-md px-2 "
          value={formData.letter}
          onChange={(e) => handleChange(e) }
        >
          <option className='text-[12px]' value="" disabled hidden>
            Select Letter
          </option>
          {letter.map((item, index) => (
            <option className='text-[12px]' value={item} key={index}>
              {item}
            </option>
          ))}
        </select>

        <select
          name="city"
          id="city"
          className="bg-[#262626] border-2 border-[#464646] outline-none h-10 rounded-md px-2"
          value={formData.city}
          onChange={ (e) => handleChange(e) }
        >
          <option className='text-[12px]' value="" disabled hidden>
            Select City
          </option>
          {city.map((item) => (
            <option className='text-[12px]' value={item.name + ' ' + item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <select
          name="packageNumber"
          id="packageNumber"
          className="bg-[#262626] border-2 border-[#464646] outline-none h-10 rounded-md px-2"
          value={formData.packageNumber}
          onChange={ (e) => handleChange(e) }
        >
          <option className='text-[12px]' value="" disabled hidden>
            Select Package Number
          </option>
          {packageNumber.map((item, index) => (
            <option className='text-[12px]' value={item} key={index}>
              {item}
            </option>
          ))}
        </select>

        <select
          name="packageQuantity"
          id="packageQuantity"
          className="bg-[#262626] border-2 border-[#464646] outline-none h-10 rounded-md px-2"
          value={formData.packageQuantity}
          onChange={ (e) => handleChange(e) }
        >
          <option className='text-[12px]' value="" disabled hidden>
            Select Package Quantity
          </option>
          {PackageQuantity.map((item, index) => (
            <option className='text-[12px]' value={item} key={index}>
              {item}
            </option>
          ))}
        </select>

        <div className='flex border-2 border-dashed border-[#464646] h-10 rounded-md px-2 justify-center items-center'>
          <p className='uppercase'>{concatenatedValues}</p>
        </div>

        <button 
          type="button" 
          className={ isDisabled ? 'bg-[#464646] text-[#686868] h-12 rounded-md font-semibold' : 'bg-[#ff7816] text-white h-12 rounded-md font-semibold flex justify-center items-center'}
          onClick={() => handleSubmit()} 
          disabled={isDisabled}>
            {loading ? <Loading /> : 'Create Route'}
        </button>
      </form>
    </div>
  );
}

export default Page;
