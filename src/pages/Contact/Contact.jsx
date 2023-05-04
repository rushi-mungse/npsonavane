import React from "react";
import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import {
    FaMailBulk,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
    FaPhone,
    FaAddressBook,
    FaWhatsapp,
    FaFacebook,
} from "react-icons/fa";

const Contact = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <header className="flex justify-between items-center bg-indigo-500 text-white h-[60px] px-4">
                <ToggleBtn />
                <div className="flex items-center justify-center">
                    <h1 className="ml-3">Personal Details</h1>
                </div>
            </header>
            <section className="bg-mild-1 py-8 lg:py-16">
                <div className="container mx-auto px-6">
                    <header>
                        <p className="pt-3">I am always happy to talk</p>
                    </header>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-16">
                        <div className="bg-white p-4 py-6 rounded-sm">
                            <div className="flex items-center">
                                <FaMailBulk className="text-2xl mr-4" />
                                <h3 className="text-lg font-medium">
                                    Personel Email id
                                </h3>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm mt-2">
                                    <a
                                        href="mailto:nikhilsonawane0712@gmail.com"
                                        target="_blank"
                                        className="text-primary-orange"
                                    >
                                        nikhilsonawane0712@gmail.com
                                    </a>{" "}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-4 py-6 rounded-sm">
                            <div className="flex items-center">
                                <FaMailBulk className="text-2xl mr-4" />
                                <h3 className="text-lg font-medium">
                                    Institute Email id
                                </h3>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm mt-2">
                                    <a
                                        href="mailto:npsonawane@mitaoe.ac.in"
                                        target="_blank"
                                        className="text-primary-orange"
                                    >
                                        npsonawane@mitaoe.ac.in
                                    </a>{" "}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-4 py-6 rounded-sm">
                            <div className="flex items-center">
                                <FaPhone className="text-2xl mr-4" />
                                <h3 className="text-lg font-medium">
                                    Phone Number
                                </h3>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm mt-2">
                                    <span> +91-9168443376</span>{" "}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-4 py-6 rounded-sm">
                            <div className="flex items-center">
                                <FaAddressBook className="text-2xl mr-4" />
                                <h3 className="text-lg font-medium">Address</h3>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm mt-2">
                                    <span> Kale Colony, Lane - 1, Alandi</span>{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mt-6 gap-8">
                        <a
                            href="https://twitter.com/Vaibhav83612404"
                            target="_blank"
                        >
                            <FaTwitter className="text-blue-600 text-2xl" />
                        </a>
                        <a
                            href=" http://linkedin.com/in/vaibhav-shelake-79656b240"
                            target="_blank"
                        >
                            <FaLinkedin className="text-blue-500 text-2xl" />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCUgZtY6jwFCCO4jw5z6zStg"
                            target="_blank"
                        >
                            <FaYoutube className="text-red-600 text-2xl" />
                        </a>
                        <a
                            href="mailto:nikhilsonawane0712@gmail.com"
                            target="_blank"
                        >
                            <FaMailBulk className="text-red-600 text-2xl" />
                        </a>
                        <a href="https://wa.me/9168443376" target="_blank">
                            <FaWhatsapp className="text-green-600 text-2xl" />
                        </a>
                        <a
                            href="https://www.facebook.com/nikhil.sonawane.16568?mibextid=ZbWKwL"
                            target="_blank"
                        >
                            <FaFacebook className="text-blue-600 text-2xl" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
