'use client';
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { useState } from "react";

function FooterMenu() {
    const [openTab, setOpenTab] = useState(1);
    return (
        <footer className="fixed bottom-0 bg-white border-t-2 border-gray-300 w-full h-[12vh] p-4 flex justify-around items-center">
            <a className={`flex flex-col items-center text-gray-500 gap-1` + (openTab === 1 ? " activefooter" : " inactivefooter")} data-toggle="tab" role="tablist"  href="#update" onClick={(e) => { e.preventDefault(); setOpenTab(1); }} >
                <CgNotes className="text-3xl"/>
                <span className="text-sm">Updates</span>
            </a>
            <a className={`flex flex-col items-center text-gray-500 gap-1` + (openTab === 2 ? " activetooter" : " inactivefooter")} data-toggle="tab" role="tablist"  href="#schedule" onClick={(e) => { e.preventDefault(); setOpenTab(2); }}>
                <MdOutlineCalendarMonth className="text-3xl" />
                <span className="text-sm">Schedule</span>
            </a>
        </footer>
    );
}

export default FooterMenu;