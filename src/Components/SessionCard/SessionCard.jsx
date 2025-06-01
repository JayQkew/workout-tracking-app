import './SessionCard.css';

import { useWorkout } from '../../Contexts/WorkoutContext';

function SessionCard(props){
    const { session } = props
    const { setSession } = useWorkout();

    function handleClick() {
        setSession(session);
    }

    return(
        <li className={session.type === 'gym' ? 'gym-session-card session-card' : 'session-card'} onClick={handleClick}>
            {session.name}
        </li>
    )
}

export default SessionCard;