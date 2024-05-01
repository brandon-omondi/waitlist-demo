import ig from "../images/ig.png"
import fb from "../images/fb.png"
import x from "../images/x.png"
import tik from "../images/tik.png"

export function Footer() {
    return(
        <div className="flex flex-col justify-center items-center text-white">
        <h1 className="self-stretch text-white text-center text-2xl font-bold leading-8 mt-8">We are just starting this journey, <br/> it’d be cool if you tagged along!</h1>
        <div className="flex items-start gap-5 opacity-50 mt-7">
            <div><img src={ig} alt="" /></div>
            <div><img src={x} alt="" /></div>
            <div><img src={tik} alt="" /></div>
            <div><img src={fb} alt="" /></div>
        </div>
        <h3 className="self-stretch text-white text-center text-xl font-normal leading-6 opacity-50 mt-7 mb-4">© 2024 All Rights Reserved. StudenTribe, Ltd</h3>
        </div>
    )
}