import Image from "next/image";

function STG() {
    return (
        <div className="relative bg-[#1d1d1d] h-[90vh] w-screen flex flex-col px-4">
            <Image src="/image.png" width={240} height={240} alt="Image" className="self-center mt-4 w-auto h-auto" />
            <h1 className="text-white text-2xl font-semibold mt-4">Proceed to pickup</h1>
            <hr className="mt-2" />
            <p className="flex gap-16 mt-2">Staging area <span>STG.</span></p>
            <hr className="mt-2" />
            <p className="flex gap-24 mt-2">Route # <span>AB2</span></p>
            <hr className="mt-2" />
            <p className="mt-2">{`Your route's packages are ready for pickup. Look for
                the signs in the station to find the staging area for
                your route.
                <br />
                <br />
                When you have arrived, scan any package from the
                cart to confirm you are at the right place. You can
                then pick up your packages.`}
            </p>
            <button className="bg-[#e6a24b] text-black w-[90%] self-center py-2 absolute bottom-6 rounded-md font-semibold text-[20px]">SCAN TO CONFIRM</button>
        </div>
    );
}

export default STG;