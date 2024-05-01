export function Cool() {
    return(
        <div className="c-container mt-20 mb-20  h-auto font-poppins text-white">
            <h1 className=" flex justify-center items-center font-bold text-[40px] leading-[56px] mb-10">Why it’s cool?</h1>
            <div className="c-why flex flex-col md:flex-row items-center mt-4 px-10 justify-center space-x-20">
                <div className="c-save bg-cards w-[420px] p-10 rounded-3xl">
                    <h3 className="font-semibold mt-4 text-[28px]">Save money</h3>
                    <p className="text-left mt-4 text-xl leading-6">With studentribe every purchase is a saving. We’ve lobbied for exclusive student discounts from local retailers and restaurants</p>
                    <div className="bg-orange-500 text-white font-normal leading-6 text-xs rounded-3xl w-fit text-nowrap px-4 py-2 mt-4">cheaper than anywhere else</div>
                </div>
                <div className="c-community bg-cards w-[420px] p-10 rounded-3xl">
                    <h3 className="font-semibold mt-4 text-[28px]">Community</h3>
                    <p className="text-left mt-4  text-xl leading-6">We offer exciting opportunities for community building through music concerts, networking mixers and many more.</p>
                    <div className="bg-indigo-500 text-white font-normal leading-6 text-xs rounded-3xl w-fit text-nowrap px-4 py-2 mt-4">meet, network & grow</div>
                </div>
            </div>
        </div>
    )
}