import React from "react";
import Header from "../Components/PageHeader/PageHeader";

function Home(){
    return(
        <>
            <header className="page-header">
                <h1>LightWeight</h1>
                <p>a light weight solution for workout tracking and planning</p>
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