import './StatSettings.css';

import { useStats } from '../../Contexts/StatsContext';

function StatSettings() {
    const {  exercises, setExercises, availableExercises } = useStats();

    function handleSelect(e){
        const selected = e.target.value;
        if (selected && !exercises.includes(selected)) {
            setExercises([...exercises, selected]);
        }
    }
    function handleRemove(exercise) {
        setExercises(exercises.filter(e => e !== exercise));
    }

    return (
        <>
            <h2 className='stat-settings-header'>Stat Settings</h2>
            <p className='label'>compare the weight you lifted for each set in different sesisons</p>
            <div className='stat-setting'>
                <p className='label'>Exercises</p>
                                <select value="" onChange={handleSelect}>
                    <option value="" disabled>Select exercise</option>
                    {availableExercises.map((ex, index) => (
                        <option key={index} value={ex}>{ex}</option>
                    ))}
                </select>
                <ul>
                    {exercises.map((exercise, index) => (
                        <li className='selected-exercise' key={index}>
                            {exercise}
                            <button className='delete-btn-1 remove-list-item' onClick={() => handleRemove(exercise)}>x</button>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    );
}

export default StatSettings;