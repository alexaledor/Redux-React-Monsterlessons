
import { createStore } from "redux";

const store = createStore(playlist);

function playlist(state = [], action){
  if (action.type === 'ADD_TRACK'){
    return[
      ...state,
      action.payload
    ]
  }
  return state;
}


const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const list = document.querySelectorAll('.list')[0];

store.subscribe(() => {
  list.innerHTML = '';
  trackInput.value = '';
  
  // store.getState().forEach(item => {
  //   const li = document.createElement('li');
  //   li.textContent = item;
  //   list.appendChild(li);
  // })

  store.getState().map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
    return item;
  })

  console.log('store',store.getState());
})

addTrackBtn.addEventListener('click',()=>{
  const trackName = trackInput.value;  
  store.dispatch({type: 'ADD_TRACK', payload: trackName})
})

// store.dispatch({type: 'ADD_TRACK', payload: 'Its my first text for store'})
// store.dispatch({type: 'ADD_TRACK', payload: 'Hello world!'})
