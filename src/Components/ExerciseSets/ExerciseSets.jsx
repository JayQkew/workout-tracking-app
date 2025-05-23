function ExerciseSets(props){
    const { exercise } = props
    return(
        <li className='complete-set'>
            <p>{exercise.name}   x  {exercise.sets} Sets</p>
        </li>
    )
}

export default ExerciseSets