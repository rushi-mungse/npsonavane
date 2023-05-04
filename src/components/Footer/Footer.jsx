import React from "react";

const Footer = () => {
    return (
        <footer className="py-4 bg-gray-400">
            <div className="w-full flex justify-center items-center flex-col">
                <h1 className="px-2 py-1 rounded-sm bg-indigo-500 shadow-lg shadow-indigo-500/50">
                    NS
                </h1>
                <span className="text-sm text-black mt-2">
                    &copy; Copyright @2023
                </span>
            </div>
        </footer>
    );
};

export default Footer;
