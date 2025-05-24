import { createContext, useState } from "react";

export const WorkoutContext = createContext();

function WorkoutProvider({ children }){
    const [plan, setPlan] = useState(null);
    const [session, setSession] = useState(null);
    const [exercise, setExercise] = useState(null);

    return (
        <WorkoutContext.Provider value={{ plan, setPlan, session, setSession, exercise, setExercise }}>
            {children}
        </WorkoutContext.Provider>
    );
}

export default WorkoutProvider;