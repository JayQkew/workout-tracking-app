import '../Styles/PageLayout.css';

import PageHeader from "../Components/PageHeader/PageHeader";
import AllPlans from "../Components/AllPlans/AllPlans";
import PlannedSession from '../Components/PlannedSession/PlannedSession';
import GlitchWord from '../Components/GlitchWord/GlitchWord';
import { ReactComponent as EditIcon } from '../Styles/Edit.svg';
import { ReactComponent as TrashIcon } from '../Styles/recycle-bin-2--remove-delete-empty-bin-trash-garbage.svg';

import { useWorkout } from '../Contexts/WorkoutContext';

import { useNavigate } from 'react-router-dom';

function Plan(){
    const { plan, setPlan, allPlans, setAllPlans } = useWorkout();
    const navigate = useNavigate();

    function handleAddSession(type) {
        const newSession = {
            id: Date.now(),
            name: type === 'rest' ? 'Rest Day' : 'New Session',
            type: type || 'gym',
            exercises: []
        };
        const updatedPlan = { ...plan, sessions: [...plan.sessions, newSession] };
        setPlan(updatedPlan);
    }

    function handleDeletePlan() {   
        console.log(allPlans)
        const updatedPlans = allPlans.filter(p => p.id !== plan.id);
        setAllPlans(updatedPlans);
        if (updatedPlans.length > 0) {
            setPlan(updatedPlans[0]);
        } else {
            setPlan(null);
            navigate('/'); // Go to home if no plans left
        }
    }

    return(
        <main>
            <PageHeader page='Plan'/>
            <section className="main-content">
                <aside className="side-cards">
                    <AllPlans/>
                </aside>
                <section className="main-cards">
                    <div className='plan-name-input-wrapper'>
                        <input 
                            type="text" 
                            value={plan.name}
                            className='plan-name-card'
                            placeholder='Plan Name'
                            onChange={e => setPlan({ ...plan, name: e.target.value })}/>
                        <EditIcon className="edit-icon" />
                    </div>
                    {plan.sessions.map((s, i) => (
                        <PlannedSession 
                            session={s} 
                            key={i}/>
                    ))}
                    <div className='add-session-btns'>
                        <button className='add-exercise-btn add-session-btn' onClick={() => handleAddSession('gym')}>Add Session</button>
                        <button className='add-exercise-btn add-session-btn' onClick={() => handleAddSession('rest')}>Add Rest Day</button>
                    </div>
                    <button className='delete-plan-btn' onClick={handleDeletePlan}>Delete Plan</button>
                </section>
            </section>
        </main>
    )
}

export default Plan;