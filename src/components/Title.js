import React, { Component} from 'react';

const TITLE = [
    "I am a Software Engineer",
    "Drozon is my Company",
    "I will make it as no.1 in the world",
    "Volley Ball is my Favourite Game",
    
];

class Title extends Component{
    state = {titleOrder:0, fadeIn:true};

    componentDidMount(){
        console.log('title component has mounted');
        this.animateTitles();
    }

    componentWillUnmount(){
        console.log("Title component will unmount");
        clearInterval(this.titleInterval);

    }

    animateTitles = () => {
        this.titleInterval=setInterval(() => {
            const increment = (this.state.titleOrder + 1) % TITLE.length;
            this.setState({titleOrder:increment});
        }, 4000);
        console.log(" this.titleInterval", this.titleInterval);
    }

    render(){
        const {fadeIn,titleOrder} = this.state;
        //  const title = TITLE[this.state.titleOrder]; 
        const title = TITLE[titleOrder];

         
    
        return(
            <p class={fadeIn ? "title-fade-in" : "title-fade-out" }>{title}</p>
        )
    }
}

export default Title;