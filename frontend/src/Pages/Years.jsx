import Card from '../components/Card';
import { Link } from 'react-router-dom';

function Years() {
    return (
        <div className='flex flex-wrap w-full justify-center items-center'>
            <Link to="/courses" state={{year : 1}}><Card year ={1}/></Link>
            <Link to="/courses" state={{year : 2}}><Card year ={2}/></Link>
            <Link to="/courses" state={{year : 3}}><Card year ={3}/></Link>
            <Link to="/courses" state={{year : 4}}><Card year ={4}/></Link>
       </div>
     );
}

export default Years;