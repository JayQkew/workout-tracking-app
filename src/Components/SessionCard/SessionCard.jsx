function SessionCard(props){
    const { session, id } = props
    return(
        <li key={id}>
            {session}
        </li>
    )
}

export default SessionCard;