import { useState, useEffect } from "react";
import Slit from "../components/Slit";
import { useLocation } from "react-router-dom";
import axios from "axios"
function Courses() {
    const location = useLocation()
    const  {year} = location.state||{}
        // State to hold the list of courses
        const [courses, setCourses] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            if (year) {
                // Make the request to fetch courses for the given year
                axios.get(`http://localhost:3000/courses?year=${year}`)
                    .then((response) => {
                        setCourses(response.data);  // Assuming response data is the list of courses
                        setLoading(false);
                    })
                    .catch((err) => {
                        console.log(err)
                        setError("Failed to fetch courses");
                        setLoading(false);
                    });
            }
            
        }, [year]);
            // Render loading, error, or courses
    if (loading) {
        return <div>Loading courses...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return ( 
        <div className="text-center w-full align-middle">
        <h1 className="mb-6">Courses for {year}</h1>
        {/* Render the list of courses */}
        {courses.length > 0 ? (
            courses.map((course, index) => <Slit key={index} course={course.course} />) 
        ) : (
            <div>No courses available for this year.</div>
        )}  
    </div>
    );
}

export default Courses;