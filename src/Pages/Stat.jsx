import '../Styles/PageLayout.css';

import StatSettings from '../Components/StatSettings/StatSettings';
import PageHeader from "../Components/PageHeader/PageHeader";

function Stat(){
    return(
        <main>
            <PageHeader page="Stats"/>
            <section className="main-content">
                <aside>
                    <StatSettings />
                </aside>
                <section className="main-cards">

                </section>
            </section>
        </main>
    )
}

export default Stat;