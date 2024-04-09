import Image from 'next/image';
import { useEffect, useState } from 'react';

interface MapSectionProps {
  id: string;
}

function MapSection({ id }: MapSectionProps) {
  const [station, setStation] = useState('');

  useEffect(() => {
    const st = JSON.parse(localStorage.getItem('station') || '');
    setStation(st);
  }, []);

  return (
    <div id={id} className="min-h-[79vh] w-screen">
      { station === 'Springfield' && <Image src="/map.webp" width={500} height={500} alt="map" className="h-[79h] w-full" /> }
      { station === 'Elkridge' && <Image src="/map2.webp" width={500} height={500} alt="map" className="h-[79h] w-full" /> }
    </div>
  );
}

export default MapSection;
