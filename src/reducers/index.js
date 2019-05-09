import { combineReducers } from 'redux';
const songsReducer = () => {
    return [
        {title: 'macarena', duration:'04:50'}, 
        {title: 'get to back', duration:'01:50'}, 
        {title: 'unforgottable', duration:'02:50'},
        {title: 'smack Down', duration:'03:50'}, 
        {title: 'hit', duration:'05:50'}, 
        {title: 'super', duration:'06:50'}, 
        {title: 'spider', duration:'07:50'}, 
        {title: 'all in one', duration:'08:50'}
    ] 
}
const countReducer = (count = 0, action) => {
    if(action.type === 'increment') {
        return count + 1;
    } else if( action.type === 'decrement') {
        return (count === 0 ) ? count : count - 1;
    } else {
        return count;
    }
}
const selectedSongReducer = (selectedSong = null,action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong;
}
export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    count : countReducer
})