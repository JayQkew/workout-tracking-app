import { createContext, useContext, useState } from "react";
import { useWorkout } from "./WorkoutContext";
import tracker from '../workout-tracking.json';

const TrackingContext = createContext();


export function TrackingProvider({ children }) {
    const { plan, session } = useWorkout();

    function addWeightReps(exercise, weightReps){

    }

    return (
        <TrackingContext.Provider value={{ addWeightReps }}>
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