import './ProjectCardStyle.css'
import ProjectCard from './ProjectCard'
import ProjectData from './ProjectCardData'

import React from 'react'

const Project = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        {ProjectData.map((val, ind) => {
          return (
            <ProjectCard
              key={ind}
              imagesource={val.imagesource}
              title={val.title}
              text={val.text}
              view={val.view}
              github={val.github}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Project
