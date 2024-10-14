import './App.css'
// import NavBar from './components/NavBar/NavBar'
// import Logo from './components/Logo/Logo'
// import Card from './components/Card/Card'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
// import CardPoster from './components/CardPoster/CardPoster'
// import Button from './components/Button/Button'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <Routes>
        {/* <Route path="/descripcion" element={<Description/>}/> */}
        <Route path="/" element={<Home/>} />
      </Routes>

  )
}

export default App
