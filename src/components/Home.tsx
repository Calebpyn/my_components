import bg from '../assets/imgs/bg_space.jpeg'
import Header from './Header'

function Home() {

    const bgSpace = bg

  return (
    <div className="w-full h-screen" style={{backgroundImage: bgSpace}}>

        <Header/>

    </div>
  )
}

export default Home