import React from "react";
import './PageHeader.css'

function PageHeader(prop){
    const {page} = prop
    return <h1 className="page-header">
        {page}
    </h1>
}

export default PageHeader;