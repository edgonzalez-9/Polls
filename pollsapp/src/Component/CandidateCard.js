import React from 'react'

const CandidateCard = (props) => {
    return(
        <div className='bookcard'>

            <img src={props.candidate.img} alt=''/>

            <div className='info'>
                Candidate: {props.candidate.name}
            </div>

            <div className='info'>
                Party: {props.candidate.party}
            </div>

        </div>
    )
}

export default CandidateCard;