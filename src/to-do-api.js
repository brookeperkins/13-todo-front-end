import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'http://localhost:3000' || 'https://user-auth-be.herokuapp.com/';

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
              .get(`${URL}api/list`)
              .set('Authorization', token)
  } catch(e) {
    throw { error: e.message }
  }
}

export function makeToDo(toDoData) {
  const token = localStorage.getItem('TOKEN')
  console.log(toDoData)
  try {
    return request
              .post(`${URL}api/list`, toDoData)
              .set('Authorization', token)
  } catch(e) {
    throw { error: e.message }
  }
}

export function changeToDo(completedToDo) {
  const token = localStorage.getItem('TOKEN')
  try {
    return request
              .put(`${URL}api/list`, completedToDo)
              .set('Authorization', token)
  } catch(e) {
    throw { error: e.message }
  }
}

export function deleteTodo(todoId) {
  const token = localStorage.getItem('TOKEN')

  try {
    return request
              .delete(`${URL}api/list`, todoId)
              .set('Authorization', token)
  } catch(e) {
    throw { error: e.message }
  }
}
