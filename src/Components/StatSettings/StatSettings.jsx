import './StatSettings.css';

import StatExercise from '../StatExercise/StatExercise';
import { useStats } from '../../Contexts/StatsContext';

function StatSettings() {
    const { metrics, setMetrics, exercises, setExercises } = useStats();


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
                            <StatExercise exercise={exercise} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default StatSettings;