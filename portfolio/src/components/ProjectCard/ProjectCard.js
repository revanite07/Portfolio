import React from 'react';
import './ProjectCard.css';

const ProjectCard = props => (

  <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={props.image} alt={props.name} />
        </div>
        <div class="card-content">
          <p>{props.description}</p>
        </div>
        <div class="card-action">
          <a href={props.link}>{props.name}</a>
        </div>
      </div>
    </div>
  </div>
);
export default ProjectCard;