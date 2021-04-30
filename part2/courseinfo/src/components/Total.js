import React from 'react'

function Total(props) {
    return (
        <b>
            total of {props.parts.reduce((total, part) => {
                return total+part.exercises;
            }, 0)} exercises
        </b>
    )
}

export default Total
