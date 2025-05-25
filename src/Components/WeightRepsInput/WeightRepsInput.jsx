import './WeightRepsInput.css'
import { useWorkout } from '../../Contexts/WorkoutContext';
import { useState } from 'react';

function WeightRepsInput(props){
    const { exercise } = props;
    const { session, addNewTrackToExercise, setNewSession } = useWorkout();

    const [weightReps, setWeightReps] = useState({ weight: 0, reps: 0 });


    function handleWeightChange(e){
        setWeightReps(wr => ({ ...wr, weight: Number(e.target.value) }));
    }

    function handleRepsChange(e){
        setWeightReps(wr => ({ ...wr, reps: Number(e.target.value) }));
    }

    function handleAddSet(e){
        e.preventDefault();
        const ex = session.exercises.find(ex => ex.id === exercise.id);
        const date = new Date();
        const today = date.getFullYear() + " " + (date.getMonth() + 1) + " " + date.getDate();

        if(!ex.track || !ex.track.some(t => t.date === today)){
            addNewTrackToExercise(ex);
        }

        // get the updated exercise in case a new track was just added (SESSION)
        const updatedEx = session.exercises.find(ex => ex.id === exercise.id);
        let trackList = updatedEx.track || [];
        let todayTrack = trackList.find(t => t.date === today);

        if(!todayTrack){
            todayTrack = { date: today, sets: [] };
            trackList = [...trackList, todayTrack];
        }

        const updatedTrack = {
            ...todayTrack,
            sets: [...todayTrack.sets, { weight: weightReps.weight, reps: weightReps.reps }]
        };

        const newTrackList = trackList.map(t => t.date === today ? updatedTrack : t);
        const updatedExercise = { ...updatedEx, track: newTrackList };
        const updatedExercises = session.exercises.map(ex =>
            ex.id === updatedExercise.id ? updatedExercise : ex
        );
        const updatedSession = { ...session, exercises: updatedExercises };

        setNewSession(updatedSession);
        setWeightReps({ weight: '', reps: '' });
    }

    return(
        <section className="set-input-container">
            <input type="number" value={weightReps.weight} onChange={handleWeightChange}/>
            <p>x</p>
            <input type="number" value={weightReps.reps} onChange={handleRepsChange}/>
            <button className="add-set-btn" onClick={handleAddSet}>+</button>
        </section>
    )
}

export default WeightRepsInput
