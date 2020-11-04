import React from 'react'
import CandidateCard from '../Component/CandidateCard';

function Senate(props){
    return(
        <>
        <div className='race'>
            <h3> Senate Races</h3>
        </div>
        <div className='maincontainer'>
            {
            props.candidates.map(candidate => <CandidateCard candidate={candidate} key={candidate.name}/>)
            }
        </div>
        </>
    )
}

export default Senate;