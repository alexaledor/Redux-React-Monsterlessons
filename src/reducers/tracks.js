const initialState = [
    {
        id: 1234,
        name: 'My supper track'
    }
]


export default function trakcks(state = initialState, action) {
    
    if (action.type === 'ADD_TRACK') {
        //console.log('ADD_TRACK',action.payload);
        return [
            ...state,
            action.payload
        ] 
    } 
    
    else if (action.type === 'FETCH_TRACKS_SUCCESS') {
        
        //console.log('FETCH_TRACKS_SUCCESS',action.payload);        
        // const row = [...state];        
        // action.payload.map(item => {
        //     row.push(item);
        // })        
        // return row;       
        
        return action.payload;
    } 
    
    else if (action.type === 'DELETE_TRACK') {
        return [...state].filter(item => item.id !== action.payload.id)
    }


    return state;
}