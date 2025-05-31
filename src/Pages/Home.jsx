import './Home.css';
import Work from '../Components/GlitchWord/GlitchWord';

function Home(){
    return(
        <>
            <header className="page-header landing-section">
                <h1>Lets Get To <br/> <Work>Work</Work></h1>
                <p>A light weight solution for workout tracking and planning</p>
                <button>Get Started</button>
            </header>
            <section>
                <h2>Features</h2>
                <ul>
                    <li>Track your workouts</li>
                    <li>Plan your training sessions</li>
                    <li>View your progress</li>
                    <li>Customizable settings</li>
                </ul>
            </section>
            <section>
                <h2>Lets Get To Work!</h2>
                <p>Jump right in! the weights wait for no-one</p>
                <button>Yessir!</button>
            </section>
        </>
    )
}

export default Home;