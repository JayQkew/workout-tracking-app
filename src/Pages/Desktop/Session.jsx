import './PageContent.css'

import PageHeader from '../../Components/PageHeader/PageHeader'
import AllSessions from '../../Components/AllSessions/AllSessions'
import SessionExercise from '../../Components/SessionExercise/SessionExercise'

function Session(){
    const exercises = [
        'Exericse',
        'Exericse',
        'Exericse',
        'Exericse',
    ]

    return(
        <main>
            <PageHeader page='Session'/>
            <section className="main-content">
                <aside className="side-cards">
                    <AllSessions/>
                </aside>
                <section className="main-cards">
                    {exercises.map((e, index) => (
                        <SessionExercise 
                            key={index}
                            show={index === 0}/>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default Session;