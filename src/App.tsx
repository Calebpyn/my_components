import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
