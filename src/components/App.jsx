import React from 'react';
import { selectSong } from '../actions';
import DemoCarousel from './Carousel';
import SongList from './SongList';
import SongDetail from './SongDetail';
import ScrollApp from './ScrollApp';
import Counter from './Counter';
const App = () => {
        return (
            <div className="ui container grid">
                <div className="ui row">
                <Counter />
                   
                </div>
                <div className="ui row">
                    <div className="column sixteen wide">
                        <DemoCarousel /> 
                    </div>
                </div>
                <div className="ui row">
                    <div className="column eight wide">
                        <SongList onClick={selectSong}/>
                      
                    </div>
                    <div className="column eight wide">
                        <SongDetail />
                       
                    </div>
                </div>
                <ScrollApp />
            </div>
        );
}
export default App;