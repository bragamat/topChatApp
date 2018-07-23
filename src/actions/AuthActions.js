import firebase from '../FirebaseConnection'

export const checkLogin = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                dispatch({
                    type: 'CHANGE_UID',
                    payload:{
                        uid: user.uid
                    }
                })
            } else{
                dispatch({
                    type: 'CHANGE_STATUS',
                    payload:{
                        status:2
                    }
                })
            }
        })
    }
}

export const changeEmail = (email) => {
    return {
        type: 'CHANGE_EMAIL',
        payload: { email }
    }
}

export const changePassword = (password) =>{
    return {
        type: 'CHANGE_PASSWORD',
        payload: { password }
    }
}
export const changeUserName = (username) =>{
    return {
        type: 'CHANGE_USERNAME',
        payload: { username }
    }
}

export const SignUpAction = (username, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
            let uid = firebase.auth().currentUser.uid
            firebase.database().ref('users').child(uid).set({ username })
            dispatch({
                type:'CHANGE_UID',
                payload:{ uid }
            })

        })
        .catch(err => {
            switch(err.code){
                case 'auth/email-already-in-use':
                alert("E-mail already in use")
                    break;
                case 'auth/invalid-email':
                alert("Email is invalid")
                    break
                case 'auth/operation-not-allowed':
                alert("Try again later")    
                    break
                case 'auth/week-password':
                alert("Password is too week!")
                    break
            }
        })
    }
}
export const SignInAction = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            let uid = firebase.auth().currentUser.uid
            alert(uid)
            dispatch({
                type:'CHANGE_UID',
                payload:{ uid }
            })
        })
            .catch(err => {
                switch(err.code){
                    case 'auth/invalid-email':
                    alert("Email is invalid")
                        break
                    case 'auth/user-disabled':
                    alert("User not active")    
                        break
                    case 'auth/user-not-found':
                    alert("User does not exist")
                        break
                    case 'auth/wrong-password':
                    alert("Email and Password does not match")
                        break
                }
            })
    }
}

export const signOut = () => {
        
    firebase.auth().signOut()
    return {
        type: 'CHANGE_STATUS',
        payload: {
            status: 2
        }
    }
}