import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
    return (
        <div className="relative w-full h-[9vh] bg-white py-2 px-2 flex justify-center items-center">
            <IoSearch size={18} className="absolute left-4 text-gray-700" />
            <input name="search" type="text" placeholder="Search with" className="border border-gray-700 rounded-md w-full h-[40px] pl-8" />
            <MdOutlineQrCodeScanner size={20} className="absolute right-6 text-gray-700" />
        </div>
    );
}

export default SearchBar;