import React, { useEffect } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsChatQuote, BsFileEarmarkPdf } from "react-icons/bs";
import { GrWorkshop, GrContactInfo } from "react-icons/gr";
import { HiTrendingUp, HiOutlineAcademicCap } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { useLocation } from "react-router-dom";

const Navigation = () => {
    const { setData } = useContext(Context);

    useEffect(() => {
        const _data = document.querySelector(".navbar");
        setData(_data);
    }, []);

    const closeNavBar = (e) => {
        document.querySelector(".navbar").style.left = "-250px";
    };

    const route = useLocation().pathname;

    return (
        <nav
            className={`${styles.nav} fixed navbar close w-[250px] min-h-screen bg-white shadow-lg shadow-gray-300/50`}
        >
            <div className="h-[200px] bg-indigo-500 text-white rounded-br-3xl">
                <div className="w-full flex items-center justify-end p-2">
                    <button
                        className=" text-white text-2xl focus:outline-none"
                        onClick={(e) => closeNavBar(e)}
                    >
                        <AiFillCloseCircle />
                    </button>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <div className="flex items-center justify-center overflow-hidden">
                        <img
                            src="https://i.ibb.co/g7wLkjm/Whats-App-Image-2023-05-04-at-11-03-11-PM.jpg"
                            alt="profile-v1"
                            border="0"
                            className="w-[80px] h-[80px] object-cover rounded-full border border-white bg-yellow-500"
                        />
                    </div>
                    <div className="mt-2 text-md">
                        <span className="name">Vaibhav Shelake</span>
                    </div>
                </div>
            </div>

            <div className="menu-bar">
                <div className="menu mt-4 px-4 h-[400px]">
                    <Link
                        to="/npsonawane/"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/npsonawane/"
                                ? "bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white"
                                : "bg-white shadow-lg shadow-withe-500/50 text-gray-700"
                        }`}
                    >
                        <BiHomeAlt className="text-md" />
                        <span className=" text nav-text ml-3 text-sm font-bold">
                            About
                        </span>
                    </Link>

                    <Link
                        to="/npsonawane/about"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/npsonawane/about"
                                ? "bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white"
                                : "bg-white shadow-lg shadow-withe-500/50 text-gray-700"
                        }`}
                    >
                        <GrContactInfo className="text-md" />
                        <span className="text nav-text ml-3 text-sm font-bold">
                            Home
                        </span>
                    </Link>

                    <Link
                        to="/npsonawane/experience"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/npsonawane/experience"
                                ? "bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white"
                                : "bg-white shadow-lg shadow-withe-500/50 text-gray-700"
                        }`}
                    >
                        <HiTrendingUp className="text-md" />
                        <span className="text nav-text ml-3 text-sm font-bold">
                            Internship
                        </span>
                    </Link>
                    <Link
                        to="/npsonawane/work"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/npsonawane/work"
                                ? "bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white"
                                : "bg-white shadow-lg shadow-withe-500/50 text-gray-700"
                        }`}
                    >
                        <GrWorkshop className="text-md" />
                        <span className="text nav-text ml-3 text-sm font-bold">
                            Projects
                        </span>
                    </Link>

                    <Link
                        to="/npsonawane/education"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/npsonawane/education"
                                ? "bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white"
                                : "bg-white shadow-lg shadow-withe-500/50 text-gray-700"
                        }`}
                    >
                        <HiOutlineAcademicCap className="text-md" />
                        <span className="text nav-text ml-3 text-sm font-bold">
                            Education
                        </span>
                    </Link>
                    <Link
                        to="/npsonawane/certificates"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/npsonawane/certificates"
                                ? "bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white"
                                : "bg-white shadow-lg shadow-withe-500/50 text-gray-700"
                        }`}
                    >
                        <BsFileEarmarkPdf className="text-md" />
                        <span className="text nav-text ml-3 text-sm font-bold">
                            Certificate
                        </span>
                    </Link>
                    <Link
                        to="/npsonawane/contact"
                        className={`flex items-center border-sm px-3 py-3 rounded-md mb-4 transition-all duration-75 ${
                            route === "/npsonawane/contact"
                                ? "bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white"
                                : "bg-white shadow-lg shadow-withe-500/50 text-gray-700"
                        }`}
                    >
                        <BsChatQuote className="text-md" />
                        <span className="text nav-text ml-3 text-sm font-bold">
                            Personal Details
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
