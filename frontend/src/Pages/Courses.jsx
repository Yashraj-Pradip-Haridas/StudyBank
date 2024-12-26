import Slit from "../components/Slit";
import { useLocation } from "react-router-dom";
function Courses() {
    const location = useLocation()
    const  {year} = location.state||{}
    return ( 
    <div className="text-center w-full align-middle">
        <h1 className="mb-6">Courses for  {year} </h1>
        <Slit/>
        <Slit/>
        <Slit/>
        <Slit/>
        <Slit/>
        <Slit/>
    </div> );
}

export default Courses;