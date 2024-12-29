// import Courses from "../Pages/Courses";

function Slit({course}) {
    return ( 
    <div className="w-96 flex p-2 border-2 m-2 ">
        <div>
            Image
        </div>
        <div className=" border-l-2 mx-3 min-h-full"></div>
        <div className="text-left text-sm">
            <p>{course}</p>
            <p>Number of Credits</p>
        </div>
    </div> );
}

export default Slit;