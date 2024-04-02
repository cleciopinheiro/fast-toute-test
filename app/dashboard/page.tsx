'use client';
import { useState } from "react";
import TopMenu from "../components/TopMenu";
import OpenMenu from "../components/OpenMenu";
import Badge from "../components/Badge";
import YouDashboard from '../components/YouDashboard';

function Page() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openBadge, setOpenBadge] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleBadge = () => {
        setOpenBadge(!openBadge);
    }

    return (
        <main className="bg-gray-300 flex flex-col">
            <Badge onBadge={ handleBadge } open={openBadge} />
            <OpenMenu onBadge={ handleBadge } onClick={ handleMenu } open={openMenu} />
            <TopMenu onClick={ handleMenu } />
            <YouDashboard />
        </main>
    );
}

export default Page;