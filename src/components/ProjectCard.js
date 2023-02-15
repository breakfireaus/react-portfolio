import './ProjectCardStyle.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
      <img src={props.imagesource} alt='Project Imagery' />
      <h2 className='project-title'>{props.title}</h2>
      <div className='project-details'>
        <p>{props.text}</p>
        <div className='project-buttons'>
          <a href={props.view} className='btn' target='_blank'>
            VIEW
          </a>
          <a href={props.github} className='btn' target='_blank'>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
