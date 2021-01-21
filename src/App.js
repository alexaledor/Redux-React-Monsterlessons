import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getTracks } from './actions/tracks'
import './App.css';

class App extends Component {
  
  addTrack = () => {
    //console.log(this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }

  findTrack = () => {
    //console.log(this.filterInput.value)
    this.props.onFindTrack(this.filterInput.value);
  }

  onClear = () => {
    this.filterInput.value = '';
    this.findTrack();
  }

  deleteItem = (id) => {
    console.log(id);
    this.props.onDeleteTrack(id);
  }

  render() {
    console.log(this.props.tracks)
    console.log('ownProps',this.props.ownProps);
    let { tracks } = this.props;
    return (
      <div className="App">
        
        <div>
          <input type="text" ref={(input) => { this.trackInput = input }} />
          <button onClick={this.addTrack}>add Track</button>
        </div>
        
        <div>
          <input type="text" ref={(input) => { this.filterInput = input }} />
          <button onClick={this.findTrack}>find Track</button>
          <button onClick={this.onClear}>Reset</button>
        </div>
        
        <div>
          <button onClick={this.props.onGetTracks}>GetTracks</button>          
        </div>
        
        <ul>
          {
            tracks.map((item, index) => (
              <li key={index}>
                <Link to={`/tracks/${item.id}`}>{item.name} </Link>                
              <button onClick={() => this.deleteItem(item.id)}>-</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
    ownProps    
    //tracks: state.tracks    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: 'ADD_TRACK', payload })
    },
    
    onFindTrack: (name) => {
      dispatch({ type: 'FIND_TRACK', payload: {name} })
    },
    
    onGetTracks: () => {      
      dispatch(getTracks());
    },

    onDeleteTrack: (id) => {
      dispatch({ type: 'DELETE_TRACK', payload: {id} })
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default connect(
//   state => ({
//     tracks: state.tracks
//   }),    
//   dispatch => ({
//     onAddTrack: (name) => {
//       const payload = {
//         id: Date.now().toString(),
//         name
//       };            
//       dispatch({type: 'ADD_TRACK', payload})
//     }
//   })
// )(App);
