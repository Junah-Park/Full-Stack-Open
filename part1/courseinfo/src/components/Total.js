import React from 'react'

function Total(props) {
    return (
        <div>
            Number of exercises {props.parts.reduce((total, part) => {
                return total+part.exercises;
            }, 0)}
        </div>
    )
}

export default Total
