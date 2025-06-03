import './SessionExercise.css'
import WeightReps from '../WeightReps/WeightReps'
import WeightRepsInput from '../WeightRepsInput/WeightRepsInput'

import { useWorkout } from '../../Contexts/WorkoutContext'

function SessionExercise(props){
    const { exercise } = props
    const { session, setNewSession } = useWorkout();

    const ex = session.exercises.find(e => e.id === exercise.id) || exercise;

    const date = new Date();
    const today = date.getFullYear() + " " + (date.getMonth() + 1) + " " + date.getDate()
    const todayTrack = ex.track?.find(t => t.date === today) || { date: today, sets: [] };
    const trackCount = todayTrack ? todayTrack.sets.length : 0;

    function handleWeightChange(setIndex, value) {
        const updatedTrack = {
            ...todayTrack,
            sets: todayTrack.sets.map((set, i) =>
                i === setIndex ? { ...set, weight: Number(value) } : set
            )
        };
        const updatedTrackList = (ex.track || []).map(t =>
            t.date === today ? updatedTrack : t
        );
        const updatedExercise = { ...ex, track: updatedTrackList };
        const updatedExercises = session.exercises.map(e =>
            e.id === ex.id ? updatedExercise : e
        );
        setNewSession({ ...session, exercises: updatedExercises });
    }

    function handleRepsChange(setIndex, value) {
        const updatedTrack = {
            ...todayTrack,
            sets: todayTrack.sets.map((set, i) =>
                i === setIndex ? { ...set, reps: Number(value) } : set
            )
        };
        const updatedTrackList = (ex.track || []).map(t =>
            t.date === today ? updatedTrack : t
        );
        const updatedExercise = { ...ex, track: updatedTrackList };
        const updatedExercises = session.exercises.map(e =>
            e.id === ex.id ? updatedExercise : e
        );
        setNewSession({ ...session, exercises: updatedExercises });
    }

    function handleDeleteSet(setIndex) {
    const updatedTrack = {
        ...todayTrack,
        sets: todayTrack.sets.filter((_, i) => i !== setIndex)
    };
    const updatedTrackList = (ex.track || []).map(t =>
        t.date === today ? updatedTrack : t
    );
    const updatedExercise = { ...ex, track: updatedTrackList };
    const updatedExercises = session.exercises.map(e =>
        e.id === ex.id ? updatedExercise : e
    );
    setNewSession({ ...session, exercises: updatedExercises });
    }

    function progressBarWidth() {
        const percentage = (trackCount / ex.sets) * 100;
        return Math.min(percentage, 100);
    }

    return(
        <section className="exercise-card">
            <h2 className='exercise-name'>{ ex.name }</h2>
            {/* <p>{trackCount} / {ex.sets}</p> */}
            <div className='progress-bar-wrapper'>
                <div className='progress-bar'>
                    <div 
                        className='progress'
                        style={{ width: `${progressBarWidth()}%` }}>
                        <p>{trackCount} / {ex.sets}</p>
                    </div>
                </div>
            </div>
            <WeightRepsInput exercise={exercise}/>
            <ul className='set-list'>
                {todayTrack.sets.map((s, i) => (
                    <WeightReps 
                        key={i} 
                        weightReps={s}
                        onWeightChange={value => handleWeightChange(i, value)}
                        onRepsChange={value => handleRepsChange(i, value)}
                        onDelete={() => handleDeleteSet(i)}/>
                        
                ))}
            </ul>
        </section>
    )
}

export default SessionExercise