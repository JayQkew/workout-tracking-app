import './AllPlans.css'
import PlanCard from "../PlanCard/PlanCard";

import { useWorkout } from '../../Contexts/WorkoutContext';

function AllPlans(){
    const { allPlans, setAllPlans } = useWorkout();

    function handleAddNewPlan() {
        // Logic to add a new plan
        console.log("Add new plan clicked");
        setAllPlans([...allPlans, { id: Date.now(), name: "New Plan", sessions: [] }]);
    }

    return(
        <>
            <h2 className='plans-header'>All Plans</h2>
            <ul className="plans-list">
                {allPlans.map((p, i) => {
                    return <PlanCard plan={p} key={i}/>
                })}
                <button className='add-new-plan' onClick={handleAddNewPlan}>+</button>
            </ul>
        </>
    );
}

export default AllPlans;