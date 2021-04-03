import React from 'react';

const Artist = ({artist}) =>{
    if(!artist){
        return null;
    }
    const {images,name,followers,genres} = artist;

    return(
        <div>
            <h2>{name}</h2>
            <h3>{followers.total}</h3>
            <h3>{genres.join(", ")}</h3>
            <img src={images[0] && images[0].url }
             alt='artist-profile'
             style={{
                 height:200,
                 width:200,
                 borderRadius:100,
                 objectFit:'cover'
             }} />
        </div>
    )
}

export default Artist;