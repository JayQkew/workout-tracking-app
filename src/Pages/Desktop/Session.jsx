import './PageContent.css'
import React, { useContext } from 'react'

import PageHeader from '../../Components/PageHeader/PageHeader'
import AllSessions from '../../Components/AllSessions/AllSessions'
import SessionExercise from '../../Components/SessionExercise/SessionExercise'

import WorkoutProvider from '../../Contexts/WorkoutContext'
import { WorkoutContext } from '../../Contexts/WorkoutContext'

import plans from '../../workout-plans.json'
import tracker from '../../workout-tracking.json'

function Session(){
    const { plan, setPlan, session, setSession, exercise, setExercise } = useContext(WorkoutContext);

    return(
        <WorkoutProvider>
            <main>
                <PageHeader page='Session'/>
                <section className="main-content">
                    <aside className="side-cards">
                        <AllSessions plan={plans[0]}/>
                    </aside>
                    <section className="main-cards">
                        {plans[0].sessions[0].exercises.map((e, index) => (
                            <SessionExercise 
                                key={index}
                                exercise={e}
                                show={index === 0}/>
                        ))}
                    </section>
                </section>
            </main>
        </WorkoutProvider>
    )
}

export default Session;