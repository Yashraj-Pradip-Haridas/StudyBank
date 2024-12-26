import Card from '../components/Card';
import { Link } from 'react-router-dom';

function Years() {
    return (
        <div className='flex flex-wrap w-full justify-center items-center'>
            <Link to="/courses" state={{year : "FY"}}><Card year ="FY"/></Link>
            <Link to="/courses" state={{year : "SY"}}><Card year ="SY"/></Link>
            <Link to="/courses" state={{year : "TY"}}><Card year ="TY"/></Link>
            <Link to="/courses" state={{year : "BE"}}><Card year ="BE"/></Link>
       </div>
     );
}

export default Years;