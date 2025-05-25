import './SessionExercise.css'
import WeightReps from '../WeightReps/WeightReps'
import WeightRepsInput from '../WeightRepsInput/WeightRepsInput'

import { useWorkout } from '../../Contexts/WorkoutContext'

function SessionExercise(props){
    const { exercise } = props
    const { session } = useWorkout();

    const ex = session.exercises.find(e => e.id === exercise.id) || exercise;

    const date = new Date();
    const today = date.getFullYear() + " " + (date.getMonth() + 1) + " " + date.getDate()
    const todayTrack = ex.track?.find(t => t.date === today) || { date: today, sets: [] };
    const trackCount = todayTrack ? todayTrack.sets.length : 0;
    return(
        <section className="exercise-card">
            <h2>{ ex.name }</h2>
            <p>{trackCount} / {ex.sets}</p>
            <WeightRepsInput exercise={exercise}/>
            <ul className='set-list'>
                {todayTrack.sets.map((s, i) => (
                    <WeightReps key={i} weightReps={s}/>
                ))}
            </ul>
        </section>
    )
}

export default SessionExercise