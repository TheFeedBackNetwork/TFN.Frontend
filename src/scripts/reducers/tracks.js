import * as types from '../constants/ActionTypes';

export default function reducer(state = {
    volume: 100,
    playing: false,
    trackName: "",
    trackId: "",
    played: 0,
    loaded: 0,
    duration: 0,
    elapsed: 0,
    remaining: 0,
    tracks: {}
}, action) {
    switch(action.type) {
        
    }

    

    return state;
}