import { createContext, useContext, useState } from "react";
import { useWorkout } from "./WorkoutContext";

const StatsContext = createContext();

export function StatsProvider({ children }) {
    return (
        <StatsContext.Provider value={{}}>
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