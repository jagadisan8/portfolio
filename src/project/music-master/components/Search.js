import React ,{Component} from 'react';

class Search extends Component{
state={adder:''}

handler=(event)=>{
    if (event.key ==='Enter' ){
        this.searchKey();
    }

}

keyChange = (event)=>{
    console.log('event.target.value',event.target.value);
    this.setState({adder:event.target.value});
}

searchKey=()=>{
    this.props.searchKey(this.state.adder)
}

render(){
    return(
        <div>
              <h1>Music Master</h1>
            <input
            onKeyPress={this.handler} 
            onChange={this.keyChange}
            placeholder='Search Artist' />
            <button onClick={this.searchKey}> Search </button>
        </div>
    )
}


}
export default Search;