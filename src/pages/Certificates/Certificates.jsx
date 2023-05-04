import React from "react";
import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import { MdCamera } from "react-icons/md";
import { BiStopCircle } from "react-icons/bi";

const Certificates = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <header className="flex justify-between items-center bg-indigo-500 text-white h-[60px] px-4">
                <ToggleBtn />
                <div className="flex items-center justify-center">
                    <h1 className="ml-3">Certificate</h1>
                </div>
            </header>

            <div className="w-[90%] mx-auto mt-4">
                <div className="mt-4 underline font-semibold flex items-center mb-4">
                    <MdCamera className="mr-4" />
                    <h1 className="">CERTIFICATES</h1>
                </div>
                <hr className="border-none w-full h-[0.5px] bg-orange-600 mb-3" />
                <a
                    href="https://drive.google.com/file/d/17yXPIf3OIVTLki3to9nh2P2kB_TLGTpT"
                    target="_blank"
                    className="text-gray-700 w-full mb-4 px-4 py-4 h-[100px] flex items-center justify-center bg-gradient-to-r fbg-gradient-to-r flex-col bg-gray-100  "
                >
                    <span> Wastewater Treatment ans Recycling</span>
                    <button className="text-sm bg-indigo-500 px-2 py-1 mt-2 text-white">
                        View Certificate
                    </button>
                </a>

                <a
                    href="https://drive.google.com/file/d/1X7OPOeZcZkFXirFTKeQtQRI2Jdk42koE"
                    target="_blank"
                    className="text-gray-700 w-full mb-4 px-4 py-4 h-[100px] flex items-center justify-center bg-gradient-to-r flex-col bg-gray-100  "
                >
                    <span> Python 3. </span>
                    <button className="text-sm bg-indigo-500 px-2 py-1 mt-2 text-white">
                        View Certificate
                    </button>
                </a>
                <a
                    href="https://drive.google.com/file/d/1UF5dlnuNzwiQSVKDGc4IaPHFfub_7s7o"
                    target="_blank"
                    className="text-gray-700 w-full mb-4 px-4 py-4 h-[100px] flex items-center  bg-gradient-to-r flex-col bg-gray-100  "
                >
                    <span> Basics of Python</span>
                    <button className="text-sm bg-indigo-500 px-2 py-1 mt-2 text-white">
                        View Certificate
                    </button>
                </a>
            </div>

            <div className="w-[90%] mx-auto mt-4">
                <div className="mt-4 underline font-semibold flex items-center mb-4">
                    <BiStopCircle className="mr-4" />
                    <h1 className="">INTERNSHIP</h1>
                </div>
                <hr className="border-none w-full h-[0.5px] bg-orange-600 mb-3" />
                <a
                    href="https://drive.google.com/file/d/1bYgUIom80365_Ui5LG3YjCYhBud_sI0-"
                    target="_blank"
                    className="text-gray-700 w-full mb-4 px-4 py-4 h-[100px] flex items-center justify-center bg-gradient-to-r flex-col bg-gray-100 "
                >
                    <span> STAAD Pro.. </span>
                    <button className="text-sm bg-indigo-500 px-2 py-1 mt-2 text-white">
                        View Certificate
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Certificates;
