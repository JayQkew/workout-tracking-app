import { createContext, useContext, useState } from "react";

import plans from '../workout-plans.json';
import tracker from '../workout-tracking.json'; 

export const WorkoutContext = createContext();

export function WorkoutProvider({ children }){
    const [plan, setPlan] = useState(plans[0]);
    const [allPlans, setAllPlans] = useState(plans);

    return (
        <WorkoutContext.Provider value={{ plan, setPlan, allPlans, setAllPlans }}>
            {children}
        </WorkoutContext.Provider>
    );
}

export function useWorkout() {
    const context = useContext(WorkoutContext);
    if (!context) {
        throw new Error("useWorkoutContext must be used within a WorkoutProvider");
    }
    return context;
}