import React from 'react'
import Part from './Part'

const Content = (props) => {
  //for each part of a course, display the name and number of exercises
  //the Part component is used to build each part's jsx
  return (
    <div>
        {
          props.parts.map( part => {
            return <Part key={part.id} name={part.name} exercises={part.exercises} />
          })
        }
    </div>
  )
}

export default Content