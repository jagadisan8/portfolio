import React, {Component} from 'react';
import Header from './Header';

class Joke extends Component{
    state ={joke:{},jokes:[]}; 

    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then((response)=> response.json())
            .then((json)=>this.setState({joke:json}))
            .catch((error)=>alert(error.message));
    }

    tenNewJoke=()=>{
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then((response)=>response.json())
            .then((json)=> this.setState({jokes:json}))
            .catch((error)=>alert(error.message));
    }

    render(){

        const {setup,punchline} = this.state.joke;
        
        return(
            <div>
            <Header/>
               <h1>Highlighted Joke</h1>
               <p> {setup} <em> {punchline}</em> </p> 
                  <hr/>
                <h2> Want More Jokes </h2>
             
               <button onClick={this.tenNewJoke}>Click Me</button>
              {
                  this.state.jokes.map(joke=>{
                      const {id,setup,punchline}=joke;
                      return(<p style={{margin:20}} key={id}> {setup} <em>{punchline}</em> </p>);
                      
                  })

              }
            </div>
           
        )
    }
}

export default Joke;