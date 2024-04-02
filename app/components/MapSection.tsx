import Image from "next/image";

interface MapSectionProps {
    id: string;
}

function MapSection({ id }: MapSectionProps) {
    return (
        <div id={id} className="min-h-[79vh] w-screen">
            <Image src="/map.webp" width={500} height={500} alt="map" className="h-[79h] w-full" />
        </div>
    );
}

export default MapSection;