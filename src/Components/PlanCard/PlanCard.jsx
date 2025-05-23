import './PlanCard.css'
import PlanSticker from '../PlanSticker/PlanSticker'

function PlanCard(props){
    const { plan, id } = props
    const planStickers =[1, 1, 1, 1]
    return(
        <li key={id} className='plan-card'>
            <p className='plan-name'>{plan.name}</p>
            <ul className='sticker-list'>
                {plan.sessions.map((s, index) => {
                    return <PlanSticker />
                })}
            </ul>
        </li>
    )
}

export default PlanCard;