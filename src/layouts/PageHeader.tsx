// import tribelogo from "../images/tribelogo.png"

export function PageHeader () {
    const openGoogleForm = () => {
        window.open('https://forms.gle/Rgi5epVCrKZDMktu6', '_blank');
      };
      
    return(
        <div className="c-nav flex gap-5 lg:gap-10 items-center">
            <div className="c-logo flex mt-4">
                <button>
                    <img src="https://i.postimg.cc/t7QxBD4m/tribelogo.png" alt="" />
                </button>
            </div>
            <div className="c-right flex  font-poppins mt-4 gap-3 lg:gap-6">
                <div><button className="text-white text-xs md:text-sm text-nowrap border-solid border-2 border-white rounded-full px-4 py-1 hover:bg-black hover:text-white">About Us</button></div>
                <div><button className="text-white text-xs md:text-sm border-solid border-2 border-white rounded-full px-4 py-1 hover:bg-black hover:text-white" onClick={openGoogleForm}>Questionaire</button></div>
                <div><button className="text-black text-xs md:text-sm text-nowrap border-solid border-2 border-white rounded-full px-4 py-1 bg-white hover:bg-black hover:text-white">Join Beta</button></div>
            </div>
        </div>
    )
}