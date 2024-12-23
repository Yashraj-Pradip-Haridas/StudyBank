import Card from '../components/Card';
function Years() {
    return (
        <div className='flex flex-wrap w-full justify-center items-center'>
            <Card year ="FY"/>
            <Card year ="SY"/>
            <Card year ="TY"/>
            <Card year ="BE"/>
       </div>
     );
}

export default Years;