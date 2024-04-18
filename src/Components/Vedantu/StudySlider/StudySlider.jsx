import React from 'react'
import './StudySlider.scss'
function StudySlider({data}) {
  return (
  <div className="studySlider">
<h1>{data.title}</h1>
<p>{data.desc}</p>
<img className="studyImg"src={data.img} alt="" />
  </div>
  )
}

export default StudySlider