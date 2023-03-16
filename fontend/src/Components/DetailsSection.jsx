import React from "react";

function DetailsSection () {
    return (
        <section className="text-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mx-auto">
                    <div className="bg-details-bg bg-no-repeat md:w-[90%] md:mx-auto rounded-3xl h-2/5">
                        <div className="w-full text-center px-4">
                            <div className="w-full py-28">
                                <h5 className="mb-2 text-[34px] font-medium text-white">You Worked Hard To Build Your Business.</h5>
                                <h5 className="mb-2 text-[34px] font-medium text-white">Countless Of Hours, Love, Sweat And Tears</h5>
                                <p className="mb-5 text-[18px] sm:text-lg text-white font-normal">Every day competitors are swarming their ads on YOUR <br/> business on Google. Stealing your customers.</p>
                                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                    <button className="transform text-black transition-all ease-in-out duration-500 font-bold w-52 h-14 rounded-3xl text-center bg-[#15CD5E] bg-gradient-to-br from-[#15CD5E] via-[#F9FF50] hover:-translate-y-1 hover:scale-100 bg-size-200 bg-pos-0 hover:bg-pos-100">FIGHT BACK NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default DetailsSection;