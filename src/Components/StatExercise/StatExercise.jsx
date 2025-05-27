import './StatExercise.css';

import { useStats } from '../../Contexts/StatsContext';

function StatExercise(props) {
    const { exercise } = props;
    const { availableExercises, exercises, setExercises } = useStats();

    function handleSelect(e){
        const selected = e.target.value;
        if (selected && !exercises.includes(selected)) {
            setExercises([...exercises, selected]);
        }
    }

    return (
        <div className="stat-exercise">
            <select onChange={handleSelect} value="">
                <option value="" disabled>Select exercise</option>
                {availableExercises.map((ex, index) => (
                    <option key={index} value={ex}>{ex}</option>
                ))}
            </select>
        </div>
    );
}

export default StatExercise;