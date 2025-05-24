import './PageContent.css'

import PageHeader from "../../Components/PageHeader/PageHeader";
import AllPlans from "../../Components/AllPlans/AllPlans";
import PlannedSession from '../../Components/PlannedSession/PlannedSession';

import { WorkoutContext } from '../../Contexts/WorkoutContext';

import { useContext } from 'react';

function Plan(){
    const { plan, allPlans } = useContext(WorkoutContext);
    return(
        <main>
            <PageHeader page='Plan'/>
            <section className="main-content">
                <aside className="side-cards">
                    <AllPlans plans={allPlans}/>
                </aside>
                <section className="main-cards">
                    {plan.sessions.map((s, i) => <PlannedSession session={s} key={i}/>)}
                </section>
            </section>
        </main>
    )
}

export default Plan;