import  React, {Component} from 'react';
import PROJECTS from '../data/projects';

const Project = props => {
    
        // const title = this.props.project.title;
        const {title,description,image,Link} = props.project; 
        return(
            <div style={{display:'inline-block',width:300,margin:10}}> 
                 <h3>  {title} </h3>
                 <img src={image} alt="profile" style={{width:200,height:120}} />
                 <p> {description} </p>
                 <a href={Link}>{Link}</a> 


            </div>

        )
    
    
}

const Projects =()=> (
   
          
                <div>
                    <hr/>
                    <div>
                        <h1>Highlighted Project</h1>
                        <div >
                            {
                                PROJECTS.map(PROJECT =>(
                                    
                                            <Project key={PROJECT.id} project={PROJECT} />                      
                                ) )
                                
                            }
                        </div>
                    </div>
                </div>
            
        
)

export default Projects;