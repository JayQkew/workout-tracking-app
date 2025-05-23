import './AllPlans.css'
import PlanCard from "../PlanCard/PlanCard";

function AllPlans(props){

    const { plans } = props

    // const plans = [
    //     "Push Pull Legs",
    //     "Upper Lower",
    //     "Bro Plan"
    // ]

    return(
        <>
            <h2>Plans</h2>
            <ul className="plans-list">
                {plans.map((p, i) => {
                    return <PlanCard plan={p} id={i}/>
                })}
            </ul>
        </>
    );
}

export default AllPlans;