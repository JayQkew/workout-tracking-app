import './PlanCard.css'
import PlanSticker from '../PlanSticker/PlanSticker'

function PlanCard(props){
    const { plan } = props
    return(
        <li className='plan-card'>
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