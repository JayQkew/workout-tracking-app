import './AllSessions.css'
import SessionCard from '../SessionCard/SessionCard';

function AllSessions(props){
    const sessions = [
        "Push",
        "Pull",
        "Legs"
    ]

    return(
        <>
            <h2>Days</h2>
            <ul className="sessions-list">
                {sessions.map((s, i) => {
                    return <SessionCard session={s} id={i}/>
                })}
            </ul>
        </>
    );
}

export default AllSessions;