import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import OrpheusFlag from "/OrpheusFlag.svg";

export default function App() {
    return (
        <div>
            <div>
                <img
                    src={OrpheusFlag}
                    className="max-w-20 sm:max-w-36 left-4 sm:left-12 absolute"
                ></img>
            </div>
            <div className="fixed max-w-48 right-4 sm:right-5 md:right-10">
                <NavBar />
            </div>
            <div className="flex justify-center text-center">
                <div className="mt-16 text-slate-950 mx-8 md:max-w-6xl font-mono">
                    <div className="flex justify-center items-center align-middle">
                        <div className="bg-yellow-400 inline-block py-2 px-4 mb-8 rounded-xl">
                            <a href="/guide" className="flex justify-center">
                            <h1 className="text-5xl sm:text-6xl font-bold text-black">
                                THE DELOREAN
                            </h1>
                            </a>
                        </div>
                    </div>
                    <img
                        src="orpheuspadpic.png"
                        className="w-full max-w-xl mx-auto"
                    ></img>
                
                    <div>

                        <div className="flex flex-row items-center justify-center space-x-4 sm:space-x-8 sm:space-y-6 md:space-y-0 py-6 text-md sm:text-2xl font-semibold">
                            <div>
                                <h3>Design a PCB</h3>
                                <img
                                    src="pcb_design_2.png"
                                    className="max-h-56 sm:max-h-80 md:max-h-96 rounded-sm my-2 border-slate-600 border-4 p-1 sm:p-2 border-dashed"
                                ></img>
                            </div>
                            <div>
                                <h3>Build a case</h3>
                                <img
                                    src="cad_design_2.png"
                                    className="max-h-56 sm:max-h-80 md:max-h-96 rounded-sm my-2 border-slate-600 border-4 p-1 sm:p-2 border-dashed"
                                ></img>
                            </div>
                            <div>
                                <h3>Code firmware</h3>
                                <img
                                    src="firmware_3.png"
                                    className="max-h-56 sm:max-h-80 md:max-h-96 rounded-sm my-2 border-slate-600 border-4 p-1 sm:p-2 border-dashed"
                                ></img>
                            </div>
                        </div>
                        <div>
                            <a href="/guide" className="flex justify-center">
                                <p className="text-xl sm:text-2xl text-center mt-10 bg-red-500 text-slate-50 max-w-54 sm:max-w-xl px-3 py-2 rounded-sm font-semibold border-black border-4">
                                    Learn how to make a hackpad ➜
                                </p>
                            </a>
                            <p className="text-xl font-semibold pt-2">
                                ...and join{" "}
                                <a
                                    href="https://hackclub.slack.com/archives/C07LESGH0B0/p1727813799029559"
                                    target="_blank"
                                    className="text-2xl underline"
                                >
                                    #hackpad
                                </a>{" "}
                                on the{" "}
                                <a
                                    href="https://hackclub.com/slack/"
                                    target="_blank"
                                >
                                    {" "}
                                    Hack Club Slack
                                </a>
                                . Or else...
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="max-h-96 pt-16">
                <Footer/>
            </div>
        </div>
    );
}
