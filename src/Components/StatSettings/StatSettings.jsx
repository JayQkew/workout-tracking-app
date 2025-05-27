import './StatSettings.css';

function StatSettings() {
    return (
        <section className="stat-settings">
            <h2>Stat Settings</h2>
            <div>
                <label for="metric">Metric:</label>
                <select name="metric" id="metric">
                    <option value="weight">Weight</option>
                    <option value="volume">Volume</option>  
                </select>
            </div>
            <div>
                <p>Exercises</p>
                <ul>
                    <li>Bench Press</li>
                    <li>Bench Press</li>
                    <li>Bench Press</li>
                    <li>Bench Press</li>
                </ul>
            </div>
        </section>
    );
}

export default StatSettings;