import './App.css'
// import FileUpload from './components/FileUpload';
import Courses from './Pages/Courses';
import Years from './Pages/Years'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
    {/* <FileUpload/> */}
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
