import './AllPlans.css'
import PlanCard from "../PlanCard/PlanCard";

import { useWorkout } from '../../Contexts/WorkoutContext';

function AllPlans(){
    const { allPlans } = useWorkout();

    return(
        <>
            <h2>Plans</h2>
            <ul className="plans-list">
                {allPlans.map((p, i) => {
                    return <PlanCard plan={p} key={i}/>
                })}
            </ul>
        </>
    );
}

export default AllPlans;