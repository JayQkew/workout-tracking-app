function PlanSticker(props){
    const { session } = props;

    return session.type === 'gym' ? <div>o</div> : <div>x</div>;
}

export default PlanSticker