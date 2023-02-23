import './ProjectCardStyle.css';
import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
      <img src={props.imagesource} alt='Project Imagery' />
      <h2 className='project-title'>{props.title}</h2>
      <div className='project-details'>
        <p>{props.text}</p>
        <p>{props.tech}</p>

        <div className='project-buttons'>
          {/* eslint-disable-next-line  */}
          <a href={props.view} className='linkbutton' target='_blank'>
            VIEW
          </a>
          {/* eslint-disable-next-line  */}
          <a href={props.github} className='linkbutton' target='_blank'>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
