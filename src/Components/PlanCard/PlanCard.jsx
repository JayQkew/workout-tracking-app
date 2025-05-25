import './PlanCard.css'
import PlanSticker from '../PlanSticker/PlanSticker'

import { useWorkout } from '../../Contexts/WorkoutContext';
import { useTracking } from '../../Contexts/TrackingContext';

function PlanCard(props){
    const { plan } = props
    const { setPlan } = useWorkout();
    const { setTrackPlan } = useTracking();
    return(
        <li className='plan-card' onClick={() => {
            setPlan(plan);
            setTrackPlan(plan);
        }}>
            <p className='plan-name'>{plan.name}</p>
            <ul className='sticker-list'>
                {plan.sessions.map((s, index) => {
                    return <PlanSticker key={index} session={s}/>
                })}
            </ul>
        </li>
    )
}

export default PlanCard;