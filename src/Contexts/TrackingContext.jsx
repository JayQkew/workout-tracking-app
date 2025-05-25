import { createContext, useContext, useState } from "react";
import tracker from '../workout-tracking.json';

const TrackingContext = createContext();


export function TrackingProvider({ children }) {
    const [tracking, setTracking] = useState({
        sessions: [],
        currentSession: null,
    });

    function startSession(session) {
        setTracking(prev => ({
            ...prev,
            currentSession: session,
        }));
    }

    function endSession() {
        setTracking(prev => ({
            ...prev,
            sessions: [...prev.sessions, prev.currentSession],
            currentSession: null,
        }));
    }

    return (
        <TrackingContext.Provider value={{ tracking, startSession, endSession }}>
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