import React from "react";

function PlanCard(props){
    const { plan, id } = props
    return(
        <li key={id}>
            {plan}
        </li>
    )
}

export default PlanCard;