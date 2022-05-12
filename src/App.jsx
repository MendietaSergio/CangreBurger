import './App.css'
import { Carousel } from './components/Carousel/Carousel'
import { Header } from './components/Header/Header'
import { Services } from './components/Services/Services'
import { Location } from './components/Location/Location'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <div className="">
      <Header />
      <div className="container">
        <Carousel/>
        <Services />
        <Location />
      </div>
      <Footer />
    </div>
  )
}

export default App
