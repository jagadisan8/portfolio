import React from 'react';
import {Link} from 'react-router-dom';

const Header =()=>{
    const Design={
        display:'inline-block',
        margin:10,
        marginBottom:30
    };

    return(
        <div >
            <h3 style={Design}><Link to='/'>Home</Link></h3>
           <h3 style={Design}><Link to='/jokes'> Jokes </Link></h3>
           <h3 style={Design}><Link to='/music-master'> Music-Master </Link></h3>
        </div>


    )
    // return(
    //     <div>
    //        <h3 style={Design}> <a href='/'>Home</a></h3>
    //       <h3 style={Design}>  <a href='/jokes'>Jokes</a></h3>
    //     </div>
    // )
}

export default Header;