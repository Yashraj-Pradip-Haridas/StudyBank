import './App.css'
import Courses from './Pages/Courses';
import Years from './Pages/Years'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Years/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses" element={<Courses/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
