import '../Styles/GlobalStyles.css';
import '../Styles/PageLayout.css';

import StatSettings from '../Components/StatSettings/StatSettings';
import PageHeader from "../Components/PageHeader/PageHeader";
import StatGraph from '../Components/StatGraph/StatGraph';

function Stat(){
    return(
        <main>
            <PageHeader page="Stats"/>
            <section className="main-content">
                <aside>
                    <StatSettings />
                </aside>
                <section className="main-cards">
                    <StatGraph />
                </section>
            </section>
        </main>
    )
}

export default Stat;