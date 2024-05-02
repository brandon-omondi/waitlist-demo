import './App.css'
import { Cool } from './layouts/Cool'
import { Footer } from './layouts/Footer'
import { Gif } from './layouts/Gif'
import { LastCTA } from './layouts/LastCTA'
import { PageHeader } from './layouts/PageHeader'
import { TwoCol } from './layouts/TwoCol'

function App() {

  return (
    <div className="bg-[url('https://i.postimg.cc/VNDXzjKd/bimg.jpg')] bg-cover">
      <div className='ml-5 mr-5 md:ml-32 md:mr-20'>
        <PageHeader/>
        <TwoCol/>
        <Cool/>
        <Gif />
      </div>
      <div className="bg-[url('https://i.postimg.cc/3Nfd6TFR/zz.png')] bg-cover ml-5 mr-5 md:ml-0 md:mr-0">
          <LastCTA/>
          <Footer/>
      </div>
    </div>    
  )
}

export default App
