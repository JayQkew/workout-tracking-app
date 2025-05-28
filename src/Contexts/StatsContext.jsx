import { createContext, useContext, useEffect, useState } from "react";
import { useWorkout } from "./WorkoutContext";

const StatsContext = createContext();

export function StatsProvider({ children }) {
    const { allPlans } = useWorkout();
    const [metrics, setMetrics] = useState('weight');
    const [allExercises, setAllExercises] = useState([]); // get this at the start
    const [exercises, setExercises] = useState([]);
    const [exerciseData, setExerciseData] = useState([]);
    const [availableExercises, setAvailableExercises] = useState([]);

    useEffect(() => {
        const uniqueExercises = new Set();
        allPlans.forEach(plan => {
            plan.sessions.forEach(session => {
                session.exercises.forEach(exercise => {
                    uniqueExercises.add(exercise.name);
                });
            });
        });
        setAllExercises(Array.from(uniqueExercises));
        setAvailableExercises(Array.from(uniqueExercises).filter(name => !exercises.includes(name)))
        setExerciseData(exercises.map(exerciseName => ({
            name: exerciseName,
            data: getExerciseData(exerciseName)
        })));
    }, [allPlans, exercises]);

    function getExerciseData(exerciseName) {
        const data = [];
        allPlans.forEach(plan => {
            plan.sessions.forEach(session => {
                session.exercises.forEach(exercise => {
                    if (exercise.name === exerciseName) {
                        exercise.track.forEach(track => {
                            track.sets.forEach(set => {
                                data.push({
                                    date: track.date,
                                    weight: set.weight,
                                    reps: set.reps
                                });
                            });
                        });
                    }
                });
            });
        });
        return data;
    }
    

    return (
        <StatsContext.Provider value={{
            metrics,
            setMetrics,
            exercises,
            setExercises,
            allExercises,
            availableExercises,
            exerciseData
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