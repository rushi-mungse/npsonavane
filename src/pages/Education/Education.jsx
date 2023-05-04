import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";

const Education = () => {
    return (
        <div className="bg-white min-h-screen">
            <header className="flex justify-between items-center border-sm bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white h-[60px] px-4">
                <ToggleBtn />
                <div className="flex items-center justify-center">
                    <h1 className="ml-3">Education</h1>
                </div>
            </header>
            <div className="w-[90%] mx-auto">
                <div className="">
                    <div className="mt-4 pb-6">
                        <h1 className="text-sm font-semibold my-4 flex items-center bg-gray-200 px-1 py-1 rounded-sm">
                            <span className="mr-2"> Degree</span>
                            <span className="mr-2">:</span>
                            <span>BTech Civil Engineering</span>
                        </h1>
                        <h1 className="text-sm font-semibold my-4 flex items-center bg-gray-200 px-1 py-1 rounded-sm">
                            <p className="mr-2 w-[60px]"> Institute Name </p>
                            <p className="mr-2">:</p>
                            <p className="">MIT Academy of Engineering, Pune</p>
                        </h1>
                        <h1 className="text-sm font-semibold my-4 flex items-center bg-gray-200 px-1 py-1 rounded-sm">
                            <span className="mr-2"> Year Of Completion </span>
                            <span className="mr-2">:</span>
                            <span className="mr-2">2023</span>
                        </h1>
                        <h1 className="text-sm font-semibold my-4 flex items-center bg-gray-200 px-1 py-1 rounded-sm">
                            <span className="mr-2"> Board </span>
                            <span className="mr-2">:</span>
                            <span className="">
                                Savitribai Phule Pune University (SPPU)
                            </span>
                        </h1>
                        <h1 className="text-sm font-semibold my-4 flex items-center bg-gray-200 px-1 py-1 rounded-sm">
                            <span className="mr-2"> CGPA </span>
                            <span className="mr-2">:</span>
                            <span>7.10 / 10.00</span>
                        </h1>
                    </div>
                    <hr className="bg-black h-[1px] border-none" />
                    <div className="mt-6 pb-10">
                        <h1 className="text-sm font-semibold my-4 flex items-center bg-gray-200 px-1 py-1 rounded-sm">
                            <span className="mr-2"> Education</span>
                            <span className="mr-2">:</span>
                            <span>12th</span>
                        </h1>
                        <h1 className="text-sm font-semibold my-4 flex items-center justify-between bg-gray-200 px-1 py-1 rounded-sm">
                            <p className="mr-2"> Institute Name </p>
                            <p className="mr-2">:</p>
                            <p>
                                Yashvant Rao Chavan Arts Commerce & Science,
                                Sillod
                            </p>
                        </h1>
                        <h1 className="text-sm font-semibold my-4 flex items-center bg-gray-200 px-1 py-1 rounded-sm">
                            <span className="mr-2"> Year Of Completion </span>
                            <span className="mr-2">:</span>
                            <span> 2019</span>
                        </h1>
                        <h1 className="text-sm font-semibold my-4 flex items-center bg-gray-200 px-1 py-1 rounded-sm">
                            <span className="mr-2"> Board </span>
                            <span className="mr-2">:</span>
                            <span>
                                 Maharashtra State Boards of Secondary & Higher
                                Secondary Education 
                            </span>
                        </h1>
                        <h1 className="text-sm font-semibold my-4 flex items-center bg-gray-200 px-1 py-1 rounded-sm">
                            <span className="mr-2"> Percentage </span>
                            <span className="mr-2">:</span>
                            <span>76.77/ 100.00</span>
                        </h1>
                    </div>
                    <hr className="bg-black h-[1px] border-none" />
                    <div className="mt-6">
                        <h1 className="text-sm font-semibold my-4 flex items-center bg-gray-200 px-1 py-1 rounded-sm">
                            <span className="mr-2"> Education </span>
                            <span className="mr-2">:</span>
                            <span>10th</span>
                        </h1>
                        <h1 className="text-sm font-semibold my-4 flex items-center  bg-gray-200 px-1 py-1 rounded-sm">
                            <p className="w-[60px] mr-2"> Institute Name </p>
                            <p className="mr-2">:</p>
                            <p>Little Wonders English School</p>
                        </h1>
                        <h1 className="text-sm font-semibold my-4 flex items-center bg-gray-200 px-1 py-1 rounded-sm">
                            <span className="mr-2"> Year Of Completion </span>
                            <span className="mr-2">:</span>
                            <span>2017</span>
                        </h1>
                        <h1 className="text-sm font-semibold my-4 flex items-center bg-gray-200 px-1 py-1 rounded-sm">
                            <span className="mr-2"> Board </span>
                            <span className="mr-2">:</span>
                            <span>
                                Maharashtra State Boards of Secondary & Higher
                                Secondary Education
                            </span>
                        </h1>
                        <h1 className="text-sm font-semibold my-4 flex items-center bg-gray-200 px-1 py-1 rounded-sm">
                            <span className="mr-2"> CGPA </span>
                            <span className="mr-2">:</span>
                            <span>79 / 100.00</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
