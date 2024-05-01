export function Cool() {
    return(
        <div className="c-container mt-20 mb-20  h-auto text-white">
            <h1 className=" flex justify-center items-center font-bold text-[40px] leading-[56px] mb-10">Why it’s cool?</h1>
            <div className="c-why flex flex-col md:flex-row items-center mt-4 px-10 justify-center space-x-20">
                <div className="c-save w-1/3">
                    <h3 className="font-semibold mt-4 text-[28px]">Save money</h3>
                    <p className="text-left mt-4 w-[381px] text-xl leading-6">With studentribe every purchase is a saving. We’ve lobbied for exclusive student discounts from local retailers and restaurants</p>
                    <div className="bg-orange-500 text-white text-xl font-normal leading-6 rounded-full w-max px-4 py-2 mt-4">cheaper than anywhere else</div>
                </div>
                <div className="c-community w-1/3">
                    <h3 className="font-semibold mt-4 text-[28px]">Community</h3>
                    <p className="text-left mt-4 w-[381px] text-xl leading-6">We offer exciting opportunities for community building through music concerts, networking mixers and many more.</p>
                    <div className="bg-indigo-500 text-white text-xl font-normal leading-6 rounded-full w-max px-4 py-2 mt-4">meet, network & grow</div>
                </div>
            </div>
        </div>
    )
}