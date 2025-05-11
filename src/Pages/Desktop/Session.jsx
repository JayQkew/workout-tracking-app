import './PageContent.css'

import PageHeader from '../../Components/PageHeader/PageHeader'
import AllSessions from '../../Components/AllSessions/AllSessions'

function Session(){
    return(
        <main>
            <PageHeader page='Session'/>
            <section className="main-content">
                <aside className="side-cards">
                    <AllSessions/>
                </aside>
                <section className="main-cards">
                    content
                </section>
            </section>
        </main>
    )
}

export default Session;