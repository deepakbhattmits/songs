import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    constructor(props) {
        super(props);
        this.state= {value:0}
        this.inputField = React.createRef();
    }
     
    display = () => {
        const name = this.inputField;
        // const value = this.inputDemo.value;
        console.log('HI :',name);        
        // document.querySelector("#disp").innerHTML= name;
    }
    clickMe () {
        console.log('TEST');
           this.setState({value: this.state.value + 1 });
         }
        // const songs = this.props.songs;
        //const listOfSongs = songs.map (song => <li key={ song.duration }>{song.title}</li>)
        renderList () {
            // console.log(this.props);
            return  this.props.songs.map((song) => {
                return (
                    <div className="item"  key={ song.title }>
                        <div className="right floated content">
                            <button 
                            onClick={() => this.props.selectSong(song) } 
                            className="ui button primary"
                            >
                                Select
                            </button>
                        </div>
                        <div className="content">
                            { song.title }
                        </div>
                        hi {this.state.value}  
        <button onClick={() => { this.clickMe()}}> Hit me</button>


    
        Enter Name <input ref={(input) => { this.inputField = input }} type="text"  />
            <button type="submit" name="Click" onClick={this.display} value="submit">SUBIT</button>    
     
            <h2>Hello <span id="disp"></span> !!!</h2>       
                    </div>
                );
                });
        }
    render () {
          
        return (        
            <div className="ui divided list"> 
                  { this.renderList() }
            </div>
        );
    }

}
const mapStateToProp = (state) => {
     // console.log(state);
    return {songs : state.songs};
}

export default connect(mapStateToProp,{ selectSong})(SongList);


