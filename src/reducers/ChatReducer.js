const initialState = {
        chats:[],
        contacts: [],
        activeChat:''
    }
    
    const ChatReducer = (state = initialState, action) => {
        // if(action.type == 'CHANGE_STATUS'){
        //     return {...state, status: action.payload.status}
        // } 
        if(action.type == 'SET_CONTACT_LIST'){
            return {...state, contacts: action.payload.users}
        }
        if(action.type == 'SET_ACTIVE_CHAT'){
            return {...state, activeChat: action.payload.chat_id}
        } 
        return state
    }   
    
    export default ChatReducer