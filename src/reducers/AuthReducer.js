const initialState = {
    email:'',
    password:'',
    status: 0,
    uid: '',
    username: ''
}

const AuthReducer = (state = initialState, action) => {
    if(action.type == 'CHANGE_STATUS'){
        return {...state, status: action.payload.status}
    } 
    if( action.type == 'CHANGE_EMAIL'){
        return{
            ...state, email: action.payload.email
        }
    }
    if(action.type == 'CHANGE_PASSWORD'){
        return {
            ...state, password: action.payload.password
        }
    }
    if(action.type == 'CHANGE_USERNAME'){
        return {
            ...state, username: action.payload.username
        }
    }
    if(action.type == 'CHANGE_UID'){
        return {
            ...state, uid: action.payload.uid, status: 1,
        }
    }
    return state
}   

export default AuthReducer