import './StatSettings.css';

import { useStats } from '../../Contexts/StatsContext';

function StatSettings() {
    const { metrics, setMetrics, exercises, setExercises, availableExercises } = useStats();

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
        <section className="stat-settings">
            <h2>Stat Settings</h2>
            <div>
                <label for="metric">Metric:</label>
                <select 
                    name="metric" 
                    id="metric"
                    value={metrics}
                    onChange={(e) => setMetrics(e.target.value)}
                >
                    <option value="weight">Weight</option>
                    <option value="volume">Volume</option>  
                </select>
            </div>
            <div>
                <p>Exercises</p>
                <ul>
                    {exercises.map((exercise, index) => (
                        <li key={index}>
                            {exercise}
                            <button onClick={() => handleRemove(exercise)}>x</button>
                        </li>
                    ))}
                </ul>
                <select value="" onChange={handleSelect}>
                    <option value="" disabled>Select exercise</option>
                    {availableExercises.map((ex, index) => (
                        <option key={index} value={ex}>{ex}</option>
                    ))}
                </select>
            </div>
        </section>
    );
}

export default StatSettings;