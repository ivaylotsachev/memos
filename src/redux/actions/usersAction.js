import * as types from '../types';

export const setUser = payload => {
    console.log('setUser action', payload);

    return { type: types.SET_USER, payload }
};