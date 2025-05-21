import './PageContent.css'

import PageHeader from '../../Components/PageHeader/PageHeader'
import AllSessions from '../../Components/AllSessions/AllSessions'
import ExerciseCard from '../../Components/ExerciseCard/ExerciseCard'

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
                        <ExerciseCard 
                            key={index}
                            show={index === 0}/>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default Session;