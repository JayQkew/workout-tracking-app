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
                <div className='weight-reps-display'>
                    <input
                        type="number"
                        value={weightReps.weight}
                        placeholder='weight'
                        min={0}
                        onClick={e => e.stopPropagation()}
                        onChange={(e) => onWeightChange(e.target.value)}
                    />
                    <p>x</p>
                    <input
                        type="number"
                        value={weightReps.reps}
                        placeholder='reps'
                        min={0}
                        onClick={e => e.stopPropagation()}
                        onChange={(e) => onRepsChange(e.target.value)}
                    />
                </div>
                <button className='add-exercise-btn' onClick={handleEditClick}>Done</button>
                <button className='add-exercise-btn delete-btn-1' onClick={handleDeleteClick}>Delete</button>
            </li>
        ) : (
            <li className='weight-reps' >
                <div className='weight-reps-display'>
                    <span>{weightReps.weight} kg</span> <p>x</p> <span>{weightReps.reps} reps</span>
                </div>
                <button className='add-exercise-btn .edit-weight-reps' onClick={handleEditClick}>Edit</button>
            </li>
        )
    )
}

export default WeightReps