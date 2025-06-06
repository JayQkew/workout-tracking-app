import './Home.css';
import GlitchWord from '../Components/GlitchWord/GlitchWord';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();
    return(
        <>
            <header className="page-header landing-section">
                <h1>Lets Get To <br/> <GlitchWord>Work</GlitchWord></h1>
                <p className='subtitle'>A light weight solution for workout tracking and planning</p>
                <button onClick={() => navigate('/plan')} className='action-btn'>Get Started</button>
            </header>
            <section className='home-section'>
                <ul>
                    <li>Track your workouts</li>
                    <li>Plan your training sessions</li>
                    <li>View your progress</li>
                </ul>
            </section>
        </>
    )
}

export default Home;