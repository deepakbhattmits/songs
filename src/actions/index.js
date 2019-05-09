export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}
export const increment = () => {
     return {
          type: 'increment'
        };
}

export const decrement = () => {
    return {
         type: 'decrement'
        };
}
