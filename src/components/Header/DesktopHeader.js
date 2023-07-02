import { Link } from "react-scroll";
import { useState } from "react";
export default () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="hidden md:block ml-10">
            <ul className="flex justify-around lg:space-x-10 md:space-x-5">
                <li>
                    <Link
                        to="HOME"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="/"
                        className="text-gray-700 hover:text-gray-900 font-medium"
                    >
                        HOME
                    </Link>
                </li>
                <li>
                    <a
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="text-gray-700 hover:text-gray-900 font-medium"
                    >
                        MARKETPLACE
                    </a>
                </li>
                <li className="relative group">
                    <a
                        href="#"
                        className="text-gray-700 hover:text-gray-900 font-medium"
                    >
                        SENSORS
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
                                Aerospace
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
                                Marine
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
                                Industrial
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="relative group">
                    <a
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="text-gray-700 hover:text-gray-900 font-medium"
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
                                Gyros/fog-mu
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="relative group">
                    <a
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="text-gray-700 hover:text-gray-900 font-medium"
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
                                Wireless node/Gateway
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
                                OPC servers/Loggers
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="relative group">
                    <a
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="text-gray-700 hover:text-gray-900 font-medium"
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
                                Liquid Analyser
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
                                Gas Analyser
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
                                Laboratory Analyser
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link
                        to=""
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="text-gray-700 hover:text-gray-900 font-medium"
                    >
                        CAREERS
                    </Link>
                </li>
                <li>
                    <Link
                        to="FEATURES"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="text-gray-700 hover:text-gray-900 font-medium"
                    >
                        FEATURES
                    </Link>
                </li>
                <li>
                    <Link
                        to="ABOUTUS"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href=""
                        className="text-gray-700 hover:text-gray-900 font-medium"
                    >
                        ABOUT US
                    </Link>
                </li>
                <li>
                    <Link
                        to="CONTACTUS"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="text-gray-700 hover:text-gray-900 font-medium"
                    >
                        CONTACT US
                    </Link>
                </li>
            </ul>
        </div>
    )
}