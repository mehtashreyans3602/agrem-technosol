import { Link } from "react-scroll";
import React, { useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
export default () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div
            className="sticky top-0 z-10"
        >
            <div className="p-4 flex justify-evenly  items-center  bg-white text-black mb-5">
                <div className="ml-10">
                    <img
                        className="ml-10 h-12 w-auto object-fit mix-blend-multiply  mx-auto lg:mx-0"
                        src="/AgremLogo.jpg"
                        alt="About Us"
                    />
                </div>
                <div className="mx-auto px-4">
                    <div className="grid grid-cols items-center justify-between h-16">
                           <DesktopHeader />
                            <MobileHeader />
                    </div>
                </div>
            </div>
        </div>
    );
};
