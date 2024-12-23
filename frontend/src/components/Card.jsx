import React from 'react'


function Card({ year}) {
    return ( 
    <div className='border-4 rounded-xl text-white p-5 max-w-1/4 m-3'>
        <div className='mb-3'>Department of Computer Engineering</div>
        <p>{year}</p>
    </div> );
}

export default Card;