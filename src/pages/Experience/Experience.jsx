import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import { MdWork } from "react-icons/md";

const Experience = () => {
    return (
        <div className="">
            <section className="pb-6">
                <header className="flex justify-between items-center bg-indigo-500 text-white h-[60px] px-4">
                    <ToggleBtn />
                    <div className="flex items-center justify-center">
                        <h1 className="ml-3">Internship</h1>
                    </div>
                </header>
                <hr className="bg-white outline-none border-none w-full h-[0.5px]" />
                <div className="mx-auto w-[95%]">
                    <div className="mt-4 underline font-semibold flex items-center mb-4">
                        <MdWork className="mr-4" />
                        <h1 className="">INTERNSHIPS</h1>
                    </div>
                    <hr className="border-none w-full h-[0.5px] bg-orange-600" />
                    <div className="px-4 mt-2">
                        <div className="text-sm font-semibold mb-4 bg-gray-200 px-1 py-1 rounded-sm">
                            <span>Site Engineer</span>{" "}
                            <span>(13/06/2022 – 16/07/2022)</span>
                        </div>
                        <div className="my-1 bg-gray-200 px-1 py-1 rounded-sm">
                            <span className="text-sm font-semibold mr-2">
                                Company Name :
                            </span>
                            <span className="underline text-sm text-blue-800 cursor-pointer">
                                Public Works Department.
                            </span>
                        </div>
                        <h1 className="text-sm font-semibold my-4 flex bg-gray-200 px-1 py-1 rounded-sm">
                            <span className="w-[120px]"> Key Skills :</span>
                            <span>
                                Reading Structural Drawings, Work of Site
                                Engineer, Preparing Estimate Bill ect.
                            </span>
                        </h1>
                        <div className="text-sm text-black my-2 rounded-sm">
                            <h1 className="text-md font-semibold mb-4 bg-gray-200 px-1 py-1 rounded-sm inline">
                                Work Details :
                            </h1>
                            <div className="ml-2 mt-2">
                                <h1 className="mb-4 text-sm text-justify">
                                    I have done my internship in PWD Sub
                                    Division, Phulambri, Dist. Aurangabad at
                                    Construction site of Tehsil Office Building,
                                    Sillod by Baba Construction Company under
                                    Supervision of PWD Department ,also learn
                                    the working of PWD office like Duty/Work of
                                    an engineer in PWD Office at different
                                    designations.
                                </h1>
                                <img
                                    src="https://i.ibb.co/mHdq1tt/Whats-App-Image-2023-05-04-at-11-14-42-PM.jpg"
                                    alt="Whats-App-Image-2023-05-04-at-11-14-43-PM-1"
                                    border="0"
                                    className="my-4"
                                />
                                <h1 className="mb-4 text-sm text-justify">
                                    I am doing internship on both site as well
                                    as office to gain knowledge. I learn the
                                    basics of building (G+3) construction work
                                    (different stages of construction) and the
                                    tasks that an engineer has to perform like
                                    preparing Estimates, Bills etc . Working on
                                    site was a very good experience. I learnt
                                    various things. I got the opportunity to
                                    interact with the eminent peoples
                                    department.
                                </h1>
                                <img
                                    src="https://i.ibb.co/6rgRHbR/Whats-App-Image-2023-05-04-at-11-14-43-PM.jpg"
                                    border="0"
                                    className=""
                                />
                                <h1 className="mb-4 text-sm text-justify mt-4">
                                    I came to know about the working of PWD
                                    office. Get to know how government projects
                                    are get approved and implemented on ground
                                    and role played by different designation
                                    engineer’s. Finally I would say from a
                                    knowledge point of view it was a good
                                    opportunity, the mentor’s were very polite
                                    and supportive and I enjoyed this journey a
                                    lot
                                </h1>
                                <img
                                    src="https://i.ibb.co/10jq5mF/Whats-App-Image-2023-05-04-at-11-14-43-PM-1.jpg"
                                    alt="Whats-App-Image-2023-05-04-at-11-14-43-PM-1"
                                    border="0"
                                    className="my-4"
                                />
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://drive.google.com/file/d/1X8XQXBGzPIiTcsZyZX5PESKmeoP0lcMK"
                        className="text-[12px] bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-sm px-2 py-1 text-white"
                        target="_blank"
                    >
                        View Certificate
                    </a>
                </div>
            </section>
            <hr />
        </div>
    );
};

export default Experience;
