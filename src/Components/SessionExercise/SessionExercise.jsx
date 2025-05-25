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
    const todayTrack = ex.track?.find(t => t.date === today);
    const trackCount = todayTrack ? todayTrack.sets.length : 0;
    return(
        <section className="exercise-card">
            <h2>{ ex.name }</h2>
            <p>{trackCount} / {ex.sets}</p>
            <WeightRepsInput exercise={exercise}/>
            <ul className='set-list'>
                    {exercise.track?.map((t, index) => (
                        <li key={index} className='set-item'>
                            <p className='set-date'>{t.date}</p>
                            {t.sets.map((s, sIndex) => (
                                <WeightReps key={sIndex} weightReps={s}/>
                            ))}
                        </li>
                    ))}
            </ul>
        </section>
    )
}

export default SessionExercise