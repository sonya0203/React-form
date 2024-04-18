import React from 'react'
import './CoursesSlider.scss'
function CoursesSlider({data}) {
    return (
        <div className="coursesSlider">
          <img  src={data.img} alt="" />  

        </div>
    )
}

export default CoursesSlider