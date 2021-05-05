import React from 'react'

function Total(props) {
    //for each part, aggregate the sum of exercises
    return (
        <b>
            total of {props.parts.reduce((total, part) => {
                return total+part.exercises;
            }, 0)} exercises
        </b>
    )
}

export default Total
