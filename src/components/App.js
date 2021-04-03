import React, { Component } from 'react';
import Projects from './Projects' ;
import Tiger from './SocialProfiles';
import profile from '../assets/profile.png';
import Title from './Title';
import Header from './Header';
// import Joke from './Joke';

class App extends Component {
    state = {displayBio : false};

    toggleDisplayBio = () =>{
        this.setState({displayBio : !this.state.displayBio});
    }


    // constructor(){
    //     super();
    //     this.state = {displayBio : false};

    //     // this.readM = this.readMore.bind(this);
    //     // this.showL = this.showLess.bind(this);
    //     this.toggle = this.toggleDisplayBio.bind(this);
        
    // }
        // readMore(){
        //     this.setState({displayBio : true});  
        // }

        // showLess(){
        //     this.setState({displayBio : false});
        // }

        // toggleDisplayBio(){
        //     this.setState({displayBio:!this.state.displayBio});
        // }
          
    render(){
    
        return(
            <div>
            <Header/>
                <img src={profile} alt="profile" className="profile" />
                <h1>Hello</h1>
                {this.state.displayBio ? <Title />: null } 
                <p> Myself Jagadisan, I will definately be a software Engineer</p>
                <p>Drozon is my company</p>
                {
                     this.state.displayBio ?(
                        <div>
                            <p> I live in Chennai </p>
                            <p> I'm also a Django Developer  </p>
                            <p> React is Awesome </p>
                            <button onClick={this.toggleDisplayBio}> Show Less</button>
                        </div>
    
                ):(
                    <button onClick={this.toggleDisplayBio}>Read More</button>
                )
                }  
                <Projects /> 
                <hr/>
                <Tiger/>
                {/* <hr/>
                <Joke /> */}
                
                
            </div>

            

        )
    
    }

}

export default App;
