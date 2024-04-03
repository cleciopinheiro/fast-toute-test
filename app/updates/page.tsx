'use client';
import { useState } from "react";
import FooterMenu from "../components/FooterMenu";
import Updates from "../components/Notifications";
import TopMenu from "../components/TopMenu";
import OpenMenu from "../components/OpenMenu";
import Badge from "../components/Badge";

function Page() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openBadge, setOpenBadge] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleBadge = () => {
        setOpenBadge(!openBadge);
    }

    return (
        <main className="w-screen bg-gray-300">
            <Badge animate={animate}  onBadge={ handleBadge } open={openBadge} />
            <OpenMenu onBadge={ handleBadge } onClick={ handleMenu } open={openMenu} />
            <TopMenu onClick={ handleMenu } />
            <Updates />
            <FooterMenu />
        </main>
    );
}

export default Page;