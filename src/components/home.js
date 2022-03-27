import React from 'react';
import image from '../assets/images/Logo4.svg';


function home(){
    return(
        <React.Fragment>
            <img className="w-100" src={image} alt="LSKV"/>
        </React.Fragment>
    )
}

export default home;