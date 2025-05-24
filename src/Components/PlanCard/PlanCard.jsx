import './PlanCard.css'
import PlanSticker from '../PlanSticker/PlanSticker'

import { useWorkout } from '../../Contexts/WorkoutContext';

function PlanCard(props){
    const { plan } = props
    const { setPlan } = useWorkout();
    return(
        <li className='plan-card' onClick={() => setPlan(plan)}>
            <p className='plan-name'>{plan.name}</p>
            <ul className='sticker-list'>
                {plan.sessions.map((s, index) => {
                    return <PlanSticker key={index}/>
                })}
            </ul>
        </li>
    )
}

export default PlanCard;