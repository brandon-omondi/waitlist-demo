export function Cool() {
    return(
        <div className="c-container mb-80 md:mb-40  h-[250px] font-poppins text-white">
            <h1 className=" flex justify-center items-center font-bold text-[40px] leading-[56px] mb-10">Why it’s cool?</h1>
            <div className="c-why flex flex-col md:flex-row h-full items-center mt-4 px-10 justify-center md:space-x-20 space-y-10 md:space-y-0 mb:20">
                <div className="c-save bg-cards md:w-[420px] h-full px-5 pt-3 pb-4 rounded-3xl text-justify">
                    <h3 className="font-semibold md:text-[28px] mb-3">Save money</h3>
                    <p className="text-left text-xs md:text-sm leading-6 mb-7 opacity-80">With studentribe, every purchase is a saving. We’ve lobbied for exclusive student discounts from the businesses you love, spanning 
                    eateries, retailers, travel and accomodation, and many other industries.</p>
                    <div className="bg-orange-500 text-white font-normal leading-6 text-sm rounded-3xl w-fit text-nowrap px-4 py-2 mb-6">cheaper than anywhere else</div>
                </div>
                <div className="c-community bg-cards md:w-[420px] h-full px-5 pt-3 pb-4 rounded-3xl text-justify">
                    <h3 className="font-semibold md:text-[28px] mb-3">Community</h3>
                    <p className="text-left text-xs md:text-sm leading-6 mb-7 opacity-80">We offer exciting spaces for community building through music concerts, networking mixers and many more.</p>
                    <div className="bg-indigo-500 text-white font-normal leading-6 text-sm rounded-3xl w-fit text-nowrap px-4 py-2 mb-6">meet, connect & grow</div>
                </div>
            </div>
        </div>
    )
}