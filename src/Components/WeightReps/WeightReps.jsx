import './WeightReps.css'
import { useState } from 'react';

function WeightReps(props){
    const { weightReps } = props;
    const [editMode, setEditMode] = useState(false);
    
    function handleEditClick(){
        setEditMode(!editMode);
    }
    return (
        editMode ? (
            <li className='weight-reps' onClick={handleEditClick}>
                <input
                    type="number"
                    value={weightReps.weight}
                    onClick={e => e.stopPropagation()}
                    onChange={(e) => props.onWeightChange(e.target.value)}
                />
                <p>x</p>
                <input
                    type="number"
                    value={weightReps.reps}
                    onClick={e => e.stopPropagation()}
                    onChange={(e) => props.onRepsChange(e.target.value)}
                />
            </li>
        ) : (
            <li className='weight-reps' onClick={handleEditClick}>
                <span>{weightReps.weight} kg</span> <p>x</p> <span>{weightReps.reps} reps</span>
            </li>
        )
    )
}

export default WeightReps