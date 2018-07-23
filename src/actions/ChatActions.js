import firebase from '../FirebaseConnection'

export const getContactList = (uid) => {
    return (dispatch) => {
        firebase.database().ref('users').orderByChild('username').once('value')
        .then((list)=>{
            let users = []
            list.forEach((user)=>{
                if(uid !== user.key){
                    users.push({
                        key: user.key,
                        username: user.val().username
                    })
                }
            })
            dispatch({
                type: 'SET_CONTACT_LIST',
                payload: {
                    users
                }
            })
        })
    }
}

export const createChat = (userLoggedIn, userToTalkTo) => {
    return (dispatch) => {

        let newChat =  firebase.database().ref('chats').push()
        newChat.child('members').child(userLoggedIn).set({
            id: userLoggedIn
        })
        newChat.child('members').child(userToTalkTo).set({
            id: userToTalkTo
        })
        let chat_id = newChat.key

        firebase.database().ref('users').child(userLoggedIn).child('chats').child(chat_id).set({
            id:chat_id
        })
        firebase.database().ref('users').child(userToTalkTo).child('chats').child(chat_id).set({
            id:chat_id
        })
        dispatch({
            type:'SET_ACTIVE_CHAT',
            payload:{ chat_id }
        })
    }

}



// export const changeUserName = (username) =>{
//     return {
//         type: 'CHANGE_USERNAME',
//         payload: { username }
//     }
// }

// export const SignInAction = (email, password) => {
//     return (dispatch) => {
//         firebase.auth().signInWithEmailAndPassword(email, password)
//         .then(user => {
//             let uid = firebase.auth().currentUser.uid
//             alert(uid)
//             dispatch({
//                 type:'CHANGE_UID',
//                 payload:{ uid }
//             })
//         })
//             .catch(err => {
//                 switch(err.code){
//                     case 'auth/invalid-email':
//                     alert("Email is invalid")
//                         break
//                     case 'auth/user-disabled':
//                     alert("User not active")    
//                         break
//                     case 'auth/user-not-found':
//                     alert("User does not exist")
//                         break
//                     case 'auth/wrong-password':
//                     alert("Email and Password does not match")
//                         break
//                 }
//             })
//     }
// }
