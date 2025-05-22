import './PageContent.css'

import PageHeader from "../../Components/PageHeader/PageHeader";
import AllPlans from "../../Components/AllPlans/AllPlans";
import SessionPlan from '../../Components/SessionPlan/SessionPlan';

function Plan(){
    const sessions = [
        'one',
        'one',
        'one',
        'one',
        'one',
        'one',
    ]

    return(
        <main>
            <PageHeader page='Plan'/>
            <section className="main-content">
                <aside className="side-cards">
                    <AllPlans/>
                </aside>
                <section className="main-cards">
                    {sessions.map(s => <SessionPlan/>)}
                </section>
            </section>
        </main>
    )
}

export default Plan;