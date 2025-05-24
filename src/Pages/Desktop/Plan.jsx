import './PageContent.css'

import PageHeader from "../../Components/PageHeader/PageHeader";
import AllPlans from "../../Components/AllPlans/AllPlans";
import PlannedSession from '../../Components/PlannedSession/PlannedSession';

import { useWorkout } from '../../Contexts/WorkoutContext';

function Plan(){
    const { plan, setPlan } = useWorkout();

    function handleSessionChange(index, newName){
        const updatedSessions = plan.sessions.map((s, i) => 
            i === index ? {...s, name: newName} : s
        )
        setPlan({...plan, sessions: updatedSessions});
    }
    return(
        <main>
            <PageHeader page='Plan'/>
            <section className="main-content">
                <aside className="side-cards">
                    <AllPlans/>
                </aside>
                <section className="main-cards">
                    {plan.sessions.map((s, i) => (
                        <PlannedSession 
                            session={s} 
                            key={i}
                            onNameChange={newName => handleSessionChange(i, newName)}/>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default Plan;