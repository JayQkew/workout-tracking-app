import './PageContent.css'

import PageHeader from "../../Components/PageHeader/PageHeader";
import AllPlans from "../../Components/AllPlans/AllPlans";
import PlannedSession from '../../Components/PlannedSession/PlannedSession';

import { useWorkout } from '../../Contexts/WorkoutContext';

function Plan(){
    const { plan, setPlan } = useWorkout();

    function handleAddSession(type) {
        const newSession = {
            id: Date.now(),
            name: type === 'rest' ? 'Rest Day' : 'New Session',
            type: type || 'gym',
            exercises: []
        };
        const updatedPlan = { ...plan, sessions: [...plan.sessions, newSession] };
        setPlan(updatedPlan);
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
                            key={i}/>
                    ))}
                    <button onClick={handleAddSession}>Add Session</button>
                    <button onClick={() => handleAddSession('rest')}>Add Rest Day</button>
                </section>
            </section>
        </main>
    )
}

export default Plan;