import tribelogo from "../assets/tribelogo.png"

export function PageHeader () {
    const openGoogleForm = () => {
        window.open('https://forms.gle/Rgi5epVCrKZDMktu6', '_blank');
      };
      
    return(
        <div className="c-nav flex gap-5 lg:gap-10 items-center">
            <div className="c-logo flex mt-4">
                <button>
                    <img src={tribelogo} alt="" />
                </button>
            </div>
            <div className="c-right flex mt-4 gap-3 lg:gap-6">
                <div><button className="text-white text-nowrap border-solid border-2 border-white rounded-full px-4 py-1">About Us</button></div>
                <div><button className="text-white border-solid border-2 border-white rounded-full px-4 py-1" onClick={openGoogleForm}>Questionaire</button></div>
                <div><button className="text-black text-nowrap border-solid border-2 border-white rounded-full px-4 py-1 bg-white hover:bg-black hover:text-white">Join Beta</button></div>
            </div>
        </div>
    )
}