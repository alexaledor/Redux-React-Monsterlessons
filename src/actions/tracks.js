var mocApiData = [
    {
        id: 1,
        name: 'First memo'
    },
    {
        id: 2,
        name: 'Second memo'
    },
    {
        id: 3,
        name: 'Third memo'
    },
    {
        id: 4,
        name: 'Fourth memo'
    },
]


export const getTracks = () => dispatch => {
    //return dispatch => {
      setTimeout(() => {
        //console.log('I got tracks');
        dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mocApiData})
      }, 1000)
    //}
}
