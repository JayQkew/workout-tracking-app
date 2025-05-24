import { createContext, useContext, useState } from "react";

import plans from '../workout-plans.json';
// import tracker from '../workout-tracking.json'; 

const WorkoutContext = createContext();

export function WorkoutProvider({ children }){
    const [plan, setPlanState] = useState(plans[0]);
    const [allPlans, setAllPlans] = useState(plans);
    const [session, setSession] = useState(plan.sessions[0]);

    function setPlan(newPlan) {
        setPlanState(newPlan);
        setAllPlans(prevPlans =>
            prevPlans.map(p => p.id === newPlan.id ? newPlan : p)
        );
    }

    function setNewSession(newSession){
        const updatedSessions = plan.sessions.map(s => 
            s.id === newSession.id ? newSession : s
        )
        setPlan({...plan, sessions: updatedSessions});
    }

    return (
        <WorkoutContext.Provider value={{ plan, setPlan, allPlans, session, setNewSession }}>
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