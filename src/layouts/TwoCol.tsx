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
        <div className="c-container flex gap-2 mt-2 w-full h-[650px]">
            <div className="c-leftside text-white w-1/2 mt-10">
                <div className="text-[56px] font-bold text-nowrap">
                    <h1>Something new <br className=" opacity-40"/> for every student</h1>
                </div>
                <p className="mt-4 w-[444px] text-justify text-xl font-normal leading-6 opacity-60">Our team has been working on an exciting product to make spending much cheaper for students, forever!

And now, you can become the very first user and get lifetime student discounts for free.</p>
                <div className="flex items-center gap-2 mt-5 " id="2">
                    <form className="flex flex-col items-start gap-1" autoComplete="off" onSubmit={handleSubmit}>
                        <label htmlFor="">Name</label>
                        <input className="bg-transparent mt-4 border-b-2 w-[300px] text-white " type="text" placeholder="Full Name" 
                        onChange={(e)=>setName(e.target.value)}
                        value={name} />
                        <label htmlFor="">Email</label>
                        <input className="bg-transparent mt-4 border-b-2 w-[300px] text-white " type="text" placeholder="example@gmail.com"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}/>
                        <label htmlFor="">Phone Number</label>
                        <input className="bg-transparent mt-4 border-b-2 w-[300px] text-white " type="text" placeholder="07XXXXXXXX"
                        onChange={(e)=>setPhone(e.target.value)}
                        value={phone}/>
                        <button className="text-white bg-indigo-500 border-2 border-white rounded-full px-4 py-1 w-[300px] mt-3" type="submit">Submit</button>
                    </form>
                </div>
                {/* <p className="self-stretch text-white text-xl font-normal leading-6 opacity-60 mt-4">We’re really honest guys and won’t send you ads.<br/> We will write only once when our platform is ready.</p> */}
            </div>
            <div className="c-rightside w-1/2">
                <img className=" mt-2 ml-48 pt-2 h-[600px] w-[300px] shrink-0" src="https://i.postimg.cc/0yvtQ00f/mock2.png" alt="" />
            </div>
        </div>
    )
}