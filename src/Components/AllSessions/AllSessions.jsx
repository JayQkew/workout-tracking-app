import './AllSessions.css'
import SessionCard from '../SessionCard/SessionCard';

function AllSessions(props){
    const { plan } = props

    return(
        <>
            <h2>{plan.name}</h2>
            <ul className="sessions-list">
                {plan.sessions.map((s, i) => {
                    return <SessionCard session={s.name} id={i} key={i}/>
                })}
            </ul>
        </>
    );
}

export default AllSessions;