import {getApi} from '../apis/todoApi'

let initialState = []


// const initialState = [
//     {
//       'name': 'GAME',
//       'content': 'Call of Duty',
//       'status':'Finished'
//     },
//     {
//       'name': 'SOCCER',
//       'content': 'Manchester United',
//       'status':'ToDo'
//     },
//     {
//       'name': 'COMIC',
//       'content': 'OnePiece',
//       'status':'Cancel'
//     },
//     {
//       'name': 'HELLO DARKNESS MY OLD FRIEND',
//       'content': 'Attack on Titan',
//       'status':'Finished'
//     }
// ]
  

const taskReducer = (state = initialState, action) => {

  switch (action.type) {
      
    case 'FETCH_TASK': {
        return action.payload
    }
      
      case 'ADD_TASK': {
      let newState = [...state];
     
        newState.push({ name: action.payload, status: 'ToDo' });
        return newState;
      }
        
      case 'EDIT_TASK': {
        const newState = [...state];
        const { data, key, statusValue } = action.payload;
        if (data) { newState[key].name = data.trim(); }
        if (newState[key].status !== statusValue) { newState[key].status = statusValue; }
        return newState;
        }
        
      case 'DELETE_TASK': {
        const newState = [...state];
        newState.splice(action.payload, 1);
        return newState
        }
            
      default: {
          return state;
      }
            
    }
}

export default taskReducer;