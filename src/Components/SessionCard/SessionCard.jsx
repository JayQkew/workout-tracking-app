import './SessionCard.css';

function SessionCard(props){
    const { session } = props
    return(
        <li className='session-card'>
            {session}
        </li>
    )
}

export default SessionCard;