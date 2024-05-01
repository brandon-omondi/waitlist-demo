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
      <div className='ml-40 mr-20'>
        <PageHeader/>
        <TwoCol/>
        <Cool/>
        <Gif />
        <div className="bg-[url('src/assets/zz.svg')] bg-cover">
          <LastCTA/>
          <Footer/>
        </div>
      </div>
    </div>    
  )
}

export default App
