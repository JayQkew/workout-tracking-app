import { createContext, useContext, useState } from "react";

import plans from '../workout-plans.json';

const WorkoutContext = createContext();

export function WorkoutProvider({ children }){
    const [plan, setPlanState] = useState(plans[0]);
    const [allPlans, setAllPlans] = useState(plans);
    const [session, setSession] = useState(plan.sessions[0]);

    function setPlan(newPlan) {
        setPlanState(newPlan)
        setAllPlans(prevPlans =>
            prevPlans.map(p => p.id === newPlan.id ? newPlan : p)
        );
        setSession(newPlan.sessions[0])
    }

    function setNewSession(newSession){
        const updatedSessions = plan.sessions.map(s => 
            s.id === newSession.id ? newSession : s
        )
        setPlan({...plan, sessions: updatedSessions});
        if (session.id === newSession.id) {
            setSession(newSession);
        }
    }

    function addNewTrackToExercise(exercise) {
        const date = new Date();
        const newTrack = {
            date: date.getFullYear() + " " + (date.getMonth() + 1) + " " + date.getDate(),
            sets: []
        };

        const updatedExercises = session.exercises.map(ex => {
            if (ex.id === exercise.id) {
                return {
                    ...ex,
                    track: [...(ex.track || []), newTrack]
                };
            }
            return ex;
        });
        
        const updatedSession = { ...session, exercises: updatedExercises };
        setNewSession(updatedSession);
    }

    return (
        <WorkoutContext.Provider value={{ 
                plan,
                setPlan, 
                allPlans, 
                session, 
                setSession,
                setNewSession,
                addNewTrackToExercise
            }}>
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