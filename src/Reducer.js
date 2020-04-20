const initialState = {
    nilai: 0
}

const TAMBAH = 'TAMBAH';
const KURANG = 'KURANG';

export {TAMBAH , KURANG}

export default (state =  initialState, action = {}) => {
    console.log('reducer');
    switch(action.type){
        case TAMBAH : 
        return Object.assign({}, state,{nilai : state.nilai + 1})
        case KURANG :
        return Object.assign({},state, {nilai : state.nilai -1 })
    default:
        console.log('default');
        return state;
        
    }
    
}