import React ,{Component} from 'react';

class Track extends Component{
    state={playmusic:false,audio_mode:null,preview:null}


    play=previewUrl=>()=>{
        const audio = new Audio(previewUrl);

        if(!this.state.playmusic){
            audio.play();
            this.setState({playmusic:true,audio_mode:audio,preview:previewUrl}); 
           
        }else{
            this.state.audio_mode.pause();
            if (this.state.preview === previewUrl){
                this.setState({playmusic:false});
            }else{
                audio.play();
                this.setState({audio_mode:audio,preview:previewUrl});
            }
            
        }
        
    }

    playPause=(tracks)=>{
        if(!tracks.preview_url){
            return <span>N/A</span>;
        }


        if (this.state.playmusic && this.state.preview == tracks.preview_url ){
            return(
                <span>| |</span>
            )
        }


        return(
            <span>
                &#9654;
            </span>
        )
    }

    render(){

        const {track}=this.props;
        return(
            <div>
                {
                    track.map(tracks=>{
                        const{id,album,name,preview_url}=tracks;
                        return(
                            <div 
                            className='track'
                            key={id}
                            onClick={this.play(preview_url)}>
                                <img
                                 className='track-image' 
                                 src={album.images[0].url } 
                                 alt='track-image'/>
                                <p
                                className="track-name">
                                {name}</p>
                                <p className='track-icon'>{this.playPause(tracks)}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Track;