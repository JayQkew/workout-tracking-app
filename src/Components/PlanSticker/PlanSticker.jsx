import './PlanSticker.css';

function PlanSticker(props){
    const { session } = props;

    return (
        <div className={session.type === 'gym' ? 'sticker gym-session' : 'sticker rest-session'}>
            {session.type === 'gym' ? 'gym' : 'rest'}
        </div>
    );
}

export default PlanSticker