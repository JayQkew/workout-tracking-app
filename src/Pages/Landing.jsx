import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Landing(){
    const navigate = useNavigate();
    const timeoutId = setTimeout(() => {
        navigate('/')
    })

    return(
        <h1>Lets get to <span>WORK</span></h1>
    )
}

export default Landing;