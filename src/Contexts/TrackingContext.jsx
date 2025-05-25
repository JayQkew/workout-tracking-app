import { createContext, useContext, useState } from "react";
import { useWorkout } from "./WorkoutContext";
import _tracker from '../workout-tracking.json';

const TrackingContext = createContext();


export function TrackingProvider({ children }) {
    const { plan, session } = useWorkout();

    const [tracker, setTracker] = useState(_tracker);

    const [trackPlan, setTrackPlanState] = useState(plan);
    const [trackSession, setTrackSession] = useState(plan.sessions[0]);

    // Custom setter
    function setTrackPlan(newPlan) {
        const p = {
            id: newPlan.id,
            name: newPlan.name,
            startDate: '',
            sessions: []
        }

        const exists = tracker.some(p => p.id === newPlan.id);
        if (!exists) {
            setTracker([...tracker, p]);
        }
        setTrackPlanState(p);
    }

    function addWeightReps(exercise, weightReps){

    }

    return (
        <TrackingContext.Provider value={{ tracker, addWeightReps, setTrackPlan }}>
            {children}
        </TrackingContext.Provider>
    );
}

export function useTracking() {
    const context = useContext(TrackingContext);
    if (!context) {
        throw new Error("useTracking must be used within a TrackingProvider");
    }
    return context;
}