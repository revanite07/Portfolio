import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import ProjectCard from '../ProjectCard';
import Wrapper from '../Wrapper'
import projects from '../../projects.json';
import About from '../About';
class Swing extends Component {
    state =  {
        projects
    }
    render() {
        return (
            <div>
                
             
                <Parallax
                    blur={10}
                    bgImage={require('./images/japancityscape.jpg')}
                    bgImageAlt="the cat"
                    strength={200}
                >
                    <div className='header-content'>
                       <h1 className='header-name'>Kelan Moffatt</h1>
                       <h3 className='header-title'>Full-Stack Web Developer</h3>
                    </div>
                    <div style={{ height: '100px' }} />
                </Parallax>
               <div className="about-content"><About/></div>
              
                <Parallax
                    
                    bgImage={require('./images/trafficblur2.jpg')}
                    bgImageAlt="tokyo"
                    strength={-200}
                >
                  
            <div style={{ height: '400px' }} />
                </Parallax>

              
              
              
                <Parallax
                    bgImage={'/path/to/another/image'}
                    strength={400}
                    renderLayer={percentage => (
                        <div
                            style={{
                                position: 'absolute',
                                background: `rgba(255, 125, 0, ${percentage * 1})`,
                                left: '50%',
                                bottom: '50%',
                                width: percentage * 500,
                                height: percentage * 500,
                            }}
                        />
                    )}
                >
                    <div className="card-content">
                        <Wrapper>
                           {this.state.projects.map(projects =>
                        <ProjectCard
                            name={projects.name}
                            image={projects.image}
                            p={projects.description}
                        />)}
                        </Wrapper>
                    </div>
                </Parallax>
            </div>
        );
    }
}
export default Swing;
                  