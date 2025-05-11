import React from "react";
import './Header.css'

function Header(prop){
    const {page} = prop
    return <h1 className="page-header">
        {page}
    </h1>
}

export default Header;