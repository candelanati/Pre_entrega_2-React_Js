import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Descripcion from './components/Descripcion/Descripcion'
import Filtrado from './components/Filtrado/Filtrado'
function App() {
  // const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/descripcion/:id" element={<Descripcion/>}/>
        <Route path="/" element={<Home/>} />
        <Route path='/filtrados/:color' element={<Filtrado/>} />
        {/* hacer 404 !!!!!!!!!!!!!!!!!!!!!! */}
      </Routes>

  )
}

export default App
