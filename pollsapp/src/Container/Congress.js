import React from 'react'
import CandidateCard from '../Component/CandidateCard'

function Congress(props){
    return(
        <>
        <div className='race'>
            <h3> Congressional Races</h3>
        </div>
        <div className='maincontainer'>
            {
            props.candidates.map(candidate => <CandidateCard candidate={candidate} key={candidate.name}/>)
            }
        </div>
        </>
    )
}

export default Congress;