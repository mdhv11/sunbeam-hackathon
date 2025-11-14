import axios from 'axios'

export async function signup(firstName, lastName, email, password, phone) {
  try {
    const url = `${config.server}/user/signup`
    const body = { firstName, lastName, email, password, phone }
    const response = await axios.post(url, body)
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}

export async function signin(email, password) {
  try {
    const url = `${config.server}/user/signin`
    const body = { email, password }
    const response = await axios.post(url, body)
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}
