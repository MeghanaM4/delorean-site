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
                        
                            <a href="/guide" className="flex justify-center">
                                <h1 className="text-5xl sm:text-6xl italic font-bold text-athenaReg mb-6">
                                    THE DELOREAN
                                </h1>
                            </a>
                      
                    </div>
                    <img
                        src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/55dab8b5523a59ab0233ee7771b9ef9f68e03172_casev2angle.png"
                        className="w-full max-w-xl mx-auto"
                    ></img>

                    <div>

                        <div className="flex flex-row items-center justify-center space-x-4 sm:space-x-8 sm:space-y-6 md:space-y-0 py-6 text-md sm:text-2xl font-semibold">
                            
                            <div>
                                <h3>Design a PCB</h3>
                                <img
                                    src="pcb_design_2.png"
                                    className="max-h-56 sm:max-h-80 md:max-h-96 rounded-sm my-2 border-athenaDark border-4 p-1 sm:p-2 border-dashed"
                                ></img>
                            </div>

                            <div className="">
                                <h3>Build a case</h3>
                                <img
                                    src="cad_design_2.png"
                                    className="max-h-56sm:max-h-80 md:max-h-96 rounded-sm my-2 border-athenaDark border-4 p-1 sm:p-2 border-dashed"
                                ></img>
                            </div>

                            <div>
                                <h3>Code firmware</h3>
                                <img
                                    src="firmware_3.png"
                                    className="max-h-56 sm:max-h-80 md:max-h-96 rounded-sm my-2 border-athenaDark border-4 p-1 sm:p-2 border-dashed"
                                ></img>
                            </div>

                        </div>

                        
                        
                        <div>
                            <a href="/guide" className="flex justify-center">
                                <p className="text-xl sm:text-2xl text-center rounded-xl mt-10 bg-athenaYellow text-slate-50 max-w-54 sm:max-w-xl px-3 py-2 rounded-sm font-semibold border-black border-4">
                                    Let's make one ➜
                                </p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="max-h-96 pt-16">
                <Footer />
            </div>
        </div>
    );
}
