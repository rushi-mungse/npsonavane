import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
const About = () => {
    return (
        <div className="abou min-h-screen bg-gray-300">
            <div className="">
                <header className="flex justify-between items-center bg-indigo-500 text-white h-[60px] px-4">
                    <ToggleBtn color="white" />
                    <div className="flex items-center justify-center">
                        <h1 className="ml-3">About</h1>
                    </div>
                </header>
                <hr className="bg-white outline-none border-none w-full h-[0.5px]" />
                <section className="bg-mild-1 py-8 lg:py-16 ">
                    <div className="container mx-auto px-6">
                        <header>
                            <h2 className="relative inline-block text-xl after:content-[''] after:absolute after:h-1 after:w-full after:bg-indigo-500 after:-bottom-1 after:left-0">
                                Who am I?
                            </h2>
                            <p className="pt-3">Civil Engineer</p>
                        </header>
                        <div className="flex-col lg:flex-row flex items-center gap-4 lg:gap-16 mt-8 lg:mt-16">
                            <div>
                                <img
                                    src="https://i.ibb.co/g7wLkjm/Whats-App-Image-2023-05-04-at-11-03-11-PM.jpg"
                                    alt="profile-v2"
                                    border="0"
                                    className="h-[150px] w-[150px] rounded-full bg-cover bg-orange-300 border-2 border-indigo"
                                />
                            </div>
                            <div>
                                <p className="mt-6">
                                    <span className="font-bold ml-2">
                                        Hi 👋
                                    </span>{" "}
                                </p>
                                <div className="flex items-start mt-4">
                                    <span className="ml-2 text-sm text-justify">
                                        I am a qualified civil engineer
                                        perceived B.tech from MIT Academy of
                                        Engineering, Pune. During my curriculum
                                        i had work on multiple projects and gone
                                        through a short-period internship at PWD
                                        department.
                                    </span>
                                </div>
                                <div className="flex items-start mt-2">
                                    <span className="ml-2 text-sm text-justify">
                                        I had Knowledge about Core Software's
                                        like E-tabs, Auto-cad, QGIS and
                                        practical experience of working on
                                        construction site. In addition to these,
                                        I am an enthusiastic person like to work
                                        on different projects and always willing
                                        to learn and experience/explore new
                                        things and try to be better than myself
                                        previous.
                                    </span>
                                </div>
                                <div className="flex items-start mt-2">
                                    <span className="ml-2 text-sm text-justify">
                                        Overall, my commitment to excellence and
                                        proven track record of success make me
                                        an invaluable asset to any team.
                                        Overall, my commitment to excellence and
                                        hard work make me invaluable asset to
                                        any team.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default About;
