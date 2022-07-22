import * as types from '../types';
import { fbRegisterUser, fbUpdateUser } from '../../utils/firebase/users';
import { auth } from '../../firebase';

export const setUser = payload => ({ type: types.SET_ACTIVE_USER, payload });

export const setRegisterError = payload => ({ type: types.SET_REGISTER_ERROR, payload })

// async actions
export const registerUser = (user, navigate) => {
    return (dispatch) => {
        fbRegisterUser(user)
            .then(response => {
                fbUpdateUser(user.name)
                    .then(data => {
                        dispatch(setUser(auth.currentUser));
                        navigate("/")
                    })
                    .catch(error => {
                        dispatch(setRegisterError(error.message));
                    })
            })
            .catch(error => {
                console.log("-------", error)
                dispatch(setRegisterError(error))
            })
    }

}