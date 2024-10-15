import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import DescripcionHome from './components/DescripcionHome/DescripcionHome'
import Filtrado from './components/Filtrado/Filtrado'
function App() {
  // const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/descripcion/:id" element={<DescripcionHome/>}/>
        <Route path="/" element={<Home/>} />
        <Route path='/filtrados/:color' element={<Filtrado/>} />
        {/* hacer 404 !!!!!!!!!!!!!!!!!!!!!! */}
      </Routes>

  )
}

export default App
