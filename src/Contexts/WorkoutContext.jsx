import { createContext, useContext, useState } from "react";

import plans from '../workout-plans.json';
import tracker from '../workout-tracking.json'; 

const WorkoutContext = createContext();

export function WorkoutProvider({ children }){
    const [plan, setPlan] = useState(plans[0]);
    const [allPlans, setAllPlans] = useState(plans);
    const [session, setSession] = useState(plan.sessions[0]);

    return (
        <WorkoutContext.Provider value={{ plan, setPlan, allPlans, session }}>
            {children}
        </WorkoutContext.Provider>
    );
}

export function useWorkout() {
    const context = useContext(WorkoutContext);
    if (!context) {
        throw new Error("useWorkout must be used within a WorkoutProvider");
    }
    return context;
}