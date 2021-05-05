import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

function Course({course}) {
    // return the name, content, and total number of exercises 
    // console.log(course)
    return (        
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>  
    )
}

export default Course
