import React , {Component} from 'react';
import socialProject from '../data/socialProfiles';

class Lio extends Component{
    render(){
        const {image,link} = this.props.jaga;
        
        return(
            <span>
                <a href={link}> 
                    <img src={image} alt="socialmedia" style={{width:35,height:35,margin:10}} />   
                </a>      
            </span>
        );
    }
}

class Tiger extends Component{
    render(){
        return(
            <div>
                <h4>Connect me with </h4>
                {
                    socialProject.map(media => {
                        return(
                            <Lio key={media.id} jaga={media} />
                        );
                        
                    })
                }
            </div>
        )
    }
}

export default Tiger;

