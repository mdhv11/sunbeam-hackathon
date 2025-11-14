import axios from 'axios'
import { config } from './config'

export async function getProperties() {
  try {
    const url = `${config.server}/property`
    const response = await axios.get(url, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}

export async function getPropertyDetails(id) {
  try {
    const url = `${config.server}/property/details/${id}`
    const response = await axios.get(url, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}

export async function deleteProperty(id) {
  try {
    const url = `${config.server}/property/${id}`
    const response = await axios.delete(url, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}

export async function addProperty(
  categoryId,
  title,
  details,
  address,
  contactNo,
  ownerName,
  isLakeView,
  isTV,
  isAC,
  isWifi,
  isMiniBar,
  isBreakfast,
  isParking,
  guests,
  bedrooms,
  beds,
  bathrooms,
  rent,
  image
) {
  try {
    const url = `${config.server}/property/`
    const body = new FormData()
    body.append('categoryId', categoryId)
    body.append('title', title)
    body.append('details', details)
    body.append('address', address)
    body.append('contactNo', contactNo)
    body.append('ownerName', ownerName)
    body.append('isLakeView', isLakeView)
    body.append('isTV', isTV)
    body.append('isAC', isAC)
    body.append('isWifi', isWifi)
    body.append('isMiniBar', isMiniBar)
    body.append('isBreakfast', isBreakfast)
    body.append('isParking', isParking)
    body.append('guests', guests)
    body.append('bedrooms', bedrooms)
    body.append('beds', beds)
    body.append('bathrooms', bathrooms)
    body.append('rent', rent)
    body.append('photo', image)
    const response = await axios.post(url, body, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}
