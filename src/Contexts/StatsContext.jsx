import { createContext, useContext, useState } from "react";
import { useWorkout } from "./WorkoutContext";

const StatsContext = createContext();

export function StatsProvider({ children }) {
    const { allPlans } = useWorkout();
    const [metrics, setMetrics] = useState('weight');
    const [exercises, setExercises] = useState([]);

    return (
        <StatsContext.Provider value={{
            metrics,
            setMetrics,
            exercises,
            setExercises
        }}>
            {children}
        </StatsContext.Provider>
    );
}

export function useStats() {
    const context = useContext(StatsContext);
    if (!context) {
        throw new Error("useStats must be used within a StatsProvider");
    }
    return context;
}