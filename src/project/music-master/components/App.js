import React, { Component } from 'react';
import Artist from './Artist';
import Track from './Track';
import Search from './Search';



const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
  state={author:null,collections:[]};
  
          
 componentDidMount(){
    this.searchKey('ar rahman')
 }

  searchKey=query=>{
      console.log(this.state.adder);
      fetch(`${API_ADDRESS}/artist/${query}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            if(json.artists.total>0){
                const artist = json.artists.items[0];
                this.setState({author:artist})
                console.log('artist',artist)

                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                    .then(response=>response.json())
                    .then(json =>    this.setState({collections:json.tracks}))
                    .catch(error=>alert(error.message));
            }
        })
        .catch(error=>alert(error.messgae));
  }

 


    render(){
   console.log('this.state',this.state); 
        return(
            <div>
               
            <Search searchKey={this.searchKey}/>
            <Artist artist={this.state.author} />
            <br/>
            <Track track={this.state.collections} />
            </div>

            

        )
    
    }

}

export default App;
