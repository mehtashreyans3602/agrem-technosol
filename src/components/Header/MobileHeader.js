import { Link } from "react-scroll";
import { useState } from "react";
export default () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="flex items-center md:hidden">
            
            <div className="ml-10 flex md:hidden">
                <button onClick={toggleMenu} className="text-gray-700">
                    {!isMenuOpen ? (
                        <svg
                            className="block h-6 w-6 "
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    ) : (
                        <div className="w-screen h-screen bg-black text-white flex flex-col">
                            <div className="w-full bg-gray-500 p-1">
                            <svg
                                className="block h-6 w-6  rounded "
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                            
                            </div>
                            <section className="MOBILE-MENU flex lg:hidden">
                                
                                <ul className="flex flex-col m-1 p-1 items-center">
                                    <li className="p-5">
                                        <Link
                                            to="home"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            href="/"
                                            className="rounded p-1 m-1 bg-white  text-black font-medium"
                                        >
                                            HOME
                                        </Link>
                                    </li>
                                    <li className="p-5">
                                        <a
                                            to="home"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            href="#"
                                            className="rounded p-1 m-1 bg-white  text-black font-medium"
                                        >
                                            MARKETPLACE
                                        </a>
                                    </li>
                                    <li className="relative group p-5">
                                        <Link
                                            href="#"
                                            className="rounded p-1 m-1 bg-white  text-black font-medium"
                                        >
                                            SENSORS
                                        </Link>
                                        <ul
                                            className={`absolute top-12 left-0 mt-2 w-40 bg-gray-100 transform ${isMenuOpen ? "" : "scale-y-0"
                                                } origin-top-right transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 rounded-md shadow-lg`}
                                        >
                                            <li>
                                                <a
                                                    to="home"
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                >
                                                    SubMenu 1
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    to="home"
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                >
                                                    SubMenu 2
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    to="home"
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                >
                                                    SubMenu 3
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="relative group p-5">
                                        <a
                                            to="home"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            href="#"
                                            className="rounded p-1 m-1 bg-white  text-black font-medium"
                                        >
                                            NAVIGATION
                                        </a>
                                        <ul
                                            className={`absolute top-12 left-0 mt-2 w-40 bg-gray-100 transform ${isMenuOpen ? "" : "scale-y-0"
                                                } origin-top-right transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 rounded-md shadow-lg`}
                                        >
                                            <li>
                                                <a
                                                    to="home"
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                >
                                                    SubMenu 1
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative group p-5">
                                        <a
                                            to="home"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            href="#"
                                            className="rounded p-1 m-1 bg-white  text-black font-medium"
                                        >
                                            INDUSTRY 4.0 / OPC
                                        </a>
                                        <ul
                                            className={`absolute top-12 left-0 mt-2 w-40 bg-gray-100 transform ${isMenuOpen ? "" : "scale-y-0"
                                                } origin-top-right transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 rounded-md shadow-lg`}
                                        >
                                            <li>
                                                <a
                                                    to="home"
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                >
                                                    SubMenu 1
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    to="home"
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                >
                                                    SubMenu 2
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative group p-5">
                                        <a
                                            to="home"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            href="#"
                                            className="rounded p-1 m-1 bg-white  text-black font-medium"
                                        >
                                            ANALYSERS
                                        </a>
                                        <ul
                                            className={`absolute top-12 left-0 mt-2 w-40 bg-gray-100 transform ${isMenuOpen ? "" : "scale-y-0"
                                                } origin-top-right transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 rounded-md shadow-lg`}
                                        >
                                            <li>
                                                <a
                                                    to="home"
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                >
                                                    SubMenu 1
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    to="home"
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                >
                                                    SubMenu 2
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    to="home"
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                >
                                                    SubMenu 3
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="p-5">
                                        <Link
                                            to=""
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            href="#"
                                            className="rounded p-1 m-1 bg-white  text-black font-medium"
                                        >
                                            CAREERS
                                        </Link>
                                    </li>
                                    <li className="p-5">
                                        <Link
                                            to="FEATURES"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            href="#"
                                            className="rounded p-1 m-1 bg-white  text-black font-medium"
                                        >
                                            FEATURES
                                        </Link>
                                    </li>
                                    <li className="p-5">
                                        <Link
                                            to="ABOUTUS"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            href=""
                                            className="rounded p-1 m-1 bg-white  text-black font-medium"
                                        >
                                            ABOUT US
                                        </Link>
                                    </li>
                                    <li className="p-5">
                                        <Link
                                            to="home"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            href="#"
                                            className="rounded p-1 m-1 bg-white  text-black font-medium"
                                        >
                                            CONTACT US
                                        </Link>
                                    </li>
                                </ul>

                            </section>
                        </div>
                    )}
                </button>
            </div>
        </div>
    )
}