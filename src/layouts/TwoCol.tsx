import {useState} from 'react'
import axios from 'axios'

export function TwoCol() {

     // form states
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');

     // submit event
     const handleSubmit=(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    // console.log(name, age, designation, salary);

    // our object to pass
    const data = {
      name,email,phone
    }
    axios.post('https://sheet.best/api/sheets/d27c2720-6543-41c9-a944-1535f79aec86',data).then(_response=>{
    //   console.log(response);
      setName('');
      setEmail('');
      setPhone('');
    })
  }


    return(
        <div className="c-container flex flex-col md:flex-row gap-2 mt-2 w-full md:h-[650px]">
            <div className="c-leftside w-1/2 mt-10">
                <div className="text-[36px] md:text-[56px] font-bold text-pretty">
                    <h1 className='leading-[36px] md:leading-[60px] text-white font-poppins text-pretty'>Something new <br/><span className="opacity-40 text-pretty">for every student</span></h1>
                </div>
                <p className="mt-4 w-[444px] text-white text-justify text-xl font-poppins font-normal leading-6 opacity-60">Our team has been working on an exciting product to make spending much cheaper for students, forever!

And now, you can become the very first user and get lifetime student discounts for free.</p>
                <div className="flex items-center font-poppins gap-2 mt-8" id="2">
                    <form className="flex flex-col ml-5 md:ml-0 items-start gap-1 text-white" autoComplete="off" onSubmit={handleSubmit}>
                        <label htmlFor="">Name</label>
                        <input className="bg-transparent mt-2 mb-3 border-b-2 w-[300px] text-white " type="text" placeholder="Full Name" 
                        onChange={(e)=>setName(e.target.value)}
                        value={name} />
                        <label htmlFor="">Email</label>
                        <input className="bg-transparent mt-2 mb-3 border-b-2 w-[300px] text-white " type="text" placeholder="example@gmail.com"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}/>
                        <label className="" htmlFor="">Phone Number</label>
                        <input className="bg-transparent mt-2 mb-3 border-b-2 w-[300px] text-white " type="text" placeholder="+2547XXXXXXX"
                        onChange={(e)=>setPhone(e.target.value)}
                        value={phone}/>
                        <button className="text-white bg-indigo-500 border-2 border-white rounded-full px-4 py-1 w-[300px] mt-3" type="submit">Submit</button>
                    </form>
                </div>
                {/* <p className="self-stretch text-white text-xl font-normal leading-6 opacity-60 mt-4">We’re really honest guys and won’t send you ads.<br/> We will write only once when our platform is ready.</p> */}
            </div>
            <div className="c-rightside md:w-1/2">
                <img className=" mt-2 px-10 pt-2 md:h-[600px] md:w-[600px] shrink-0 motion-reduce:animate-bounce" src="https://i.postimg.cc/Hshr9XzC/twin.png" alt="" />
            </div>
        </div>
    )
}