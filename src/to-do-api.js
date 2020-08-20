  
import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://user-auth-be.herokuapp.com/';

export function signUp(userData) {
  try {
    return request.post(`${URL}auth/signup`, userData)
  } catch(e) {
    throw { error: e.message }
  }
}

export function signIn(userData) {
  try {
    return request.post(`${URL}auth/signin`, userData)
  } catch(e) {
    throw { error: e.message }
  }
}


export function fetchList() {
  const token = localStorage.getItem('TOKEN')

  try {
    return request
              .get(`${URL}api/ToDos`)
              .set('Authorization', token)
  } catch(e) {
    throw { error: e.message }
  }
}