import React from "react";
import style from "./Home.module.css";
import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import { DiAptana, DiMaterializecss, DiNodejs } from "react-icons/di";
import { SiAntdesign, SiSeagate } from "react-icons/si";

const Home = () => {
    return (
        <div className="home bg-white-300 min-h-screen relative">
            <div className="border-sm bg-indigo-500 shadow-lg shadow-indigo-500/50">
                <header className="flex justify-between items-center  text-white h-[60px] px-4">
                    <ToggleBtn />
                    <div className="flex items-center justify-center">
                        <h1 className="ml-3">Home</h1>
                    </div>
                </header>
                <hr className="bg-white outline-none border-none w-full h-[0.5px]" />
                <div className={`${style.myInfo} h-[300px]`}>
                    <div className="flex items-center justify-between mt-4 w-[95%] mx-auto">
                        <div className="">
                            <h1 className="text-white text-sm">
                                Hi 👋 my name is
                            </h1>
                            <h1 className="text-lg font-semibold text-[#F98F45]">
                                NIKHIL SONAWANE
                            </h1>
                            <h1 className="text-sm text-white underline">
                                CIVIL ENGINEERING
                            </h1>
                        </div>

                        <img
                            src="https://i.ibb.co/g7wLkjm/Whats-App-Image-2023-05-04-at-11-03-11-PM.jpg"
                            alt="profile-v2"
                            border="0"
                            className="h-[150px] w-[150px] rounded-full bg-cover bg-orange-300 border-2 border-white"
                        />
                    </div>
                </div>
            </div>
            <section className="absolute top-[265px] right-0 left-0 rounded-t-[50px] bg-white pb-12">
                <div className="mt-12 px-8">
                    <div className="mx-auto w-[95%]">
                        <h1 className=" mb-8 font-semibold">
                            Favourit Subjects :
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 lg:mt-16">
                            <div className="bg-gray-300 p-4 py-6 flex gap-4 rounded-sm">
                                <div>
                                    <h3 className="text-lg font-medium">
                                        Solid Waste Management
                                    </h3>
                                    <p className="text-sm">
                                        In SWM we get to know how the municipal
                                        bodies handle solid waste, its impacts
                                        on environment and human health, new
                                        technologies operating in these field,
                                        different government organisations
                                        involved and many more. We get to know
                                        the job opportunities in these field and
                                        not as a job only but how we can
                                        contribute to society as well.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-300 p-4 py-6 flex gap-4 rounded-sm">
                                <div>
                                    <h3 className="text-lg font-medium">
                                        QGIS
                                    </h3>
                                    <p className="text-sm">
                                        QGIS software is of great importance in
                                        today's technological world. These
                                        subject make us help to understand
                                        geographical mapping, locating areas,
                                        objects and how the software helps in
                                        town planning. During our learning, we
                                        in a group work on project name "Urban
                                        sprawl analysis of Alandi using QGIS.
                                        QGIS software provide data to different
                                        sector for planning and analysis.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-300 p-4 py-6 flex gap-4 rounded-sm">
                                <div>
                                    <h3 className="text-lg font-medium">
                                        Surveying and Geospatial Engineering
                                    </h3>
                                    <p className="text-sm">
                                        In these subject i found myself to be
                                        compatible to handle various surveying
                                        instruments and have gain basic
                                        knowledge of geospatial field. In future
                                        if i get a chance i will like to work in
                                        these domain.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-300 p-4 py-6 flex gap-4 rounded-sm">
                                <div>
                                    <h3 className="text-lg font-medium">
                                        Environment impact assessment and
                                        climate change
                                    </h3>
                                    <p className="text-sm">
                                        I enjoy learning these subject as it was
                                        majorly based on contemporary problem we
                                        are facing today related to environment.
                                        Get to know how in real the EIA process
                                        is carried out, stakeholders involve in
                                        it and learn climate change
                                        comprehensively. Here i felt how
                                        engineering solutions could provide
                                        relief to social problems and need to do
                                        more research in these field.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
