import './SessionCard.css';

import { useWorkout } from '../../Contexts/WorkoutContext';

function SessionCard(props){
    const { session } = props
    const { setSession } = useWorkout();

    function handleClick() {
        setSession(session);
    }

    return(
        <li className='session-card' onClick={handleClick}>
            {session.name}
        </li>
    )
}

export default SessionCard;