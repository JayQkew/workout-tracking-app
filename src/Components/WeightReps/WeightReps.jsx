import './WeightReps.css'
import { useState } from 'react';

function WeightReps(props){
    const { weightReps, onWeightChange, onRepsChange, onDelete } = props;
    const [editMode, setEditMode] = useState(false);
    
    function handleEditClick(){
        setEditMode(!editMode);
    }

    function handleDeleteClick(e){
        e.stopPropagation();
        if (props.onDelete) props.onDelete();
    }

    return (
        editMode ? (
            <li className='weight-reps' onClick={handleEditClick}>
                <input
                    type="number"
                    value={weightReps.weight}
                    onClick={e => e.stopPropagation()}
                    onChange={(e) => onWeightChange(e.target.value)}
                />
                <p>x</p>
                <input
                    type="number"
                    value={weightReps.reps}
                    onClick={e => e.stopPropagation()}
                    onChange={(e) => onRepsChange(e.target.value)}
                />
                <button onClick={handleDeleteClick}>Delete</button>
            </li>
        ) : (
            <li className='weight-reps' onClick={handleEditClick}>
                <span>{weightReps.weight} kg</span> <p>x</p> <span>{weightReps.reps} reps</span>
            </li>
        )
    )
}

export default WeightReps