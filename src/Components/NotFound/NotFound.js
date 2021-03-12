import React from 'react';
import './NotFound.css'
import img from '../../Images/Photo/giphy.gif'
const NotFound = () => {
    return (
        <div className='error'>
            <div >
                <h1>Error 404!</h1>
                <p><big>Page Not Found</big></p>
            </div>       
            <div>
                <img src={img} alt=""/>
            </div>

        </div>
    );
};

export default NotFound;