import axios from 'axios'

const production = false

export const API_URL = production ? process.env.REACT_APP_API_URL || '' : 'https://api-dev.tezparcel.co.uk/api'
export const MEDIA_URL = process.env.REACT_APP_MEDIA_URL || 'https://api-dev.tezparcel.co.uk/'
export const SITE_URL = process.env.REACT_APP_SITE_URL || 'https://dev.tezparcel.co.uk/'
export const WS_URL = production ? process.env.REACT_APP_WS_URL || '' : 'https://api-dev.tezparcel.co.uk/api/v1/'

const client = axios.create({ baseURL: API_URL + '/v1/' })
// rateLimit(axios.create({ baseURL: API_URL + '/v1/' }), {
//   maxRequests: 2,
//   perMilliseconds: 1000,
//   maxRPS: 2
// })
export const request = async ({ ...options }) => {
  //   await avoidRateLimit()

  client.defaults.headers.common.Accept = 'multipart/form-data'
  const onSuccess = (response: any) => {
    return response
  }
  const onError = (error: any) => {
    return Promise.reject(error)
  }

  return client(options).then(onSuccess).catch(onError)
}

export function avoidRateLimit(delay = 500) {
  if (!process.env.IS_BUILD) {
    return
  }

  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

// rateLimit(axios.create({ baseURL: API_URL + '/v1/' }), {
//   maxRequests: 2,
//   perMilliseconds: 1000,
//   maxRPS: 2
// })
export const requestWithAuth = async ({ ...options }) => {
  const auth = window.localStorage.getItem('accessToken') ? `Bearer ${window.localStorage.getItem('accessToken')}` : ''
  client.defaults.headers.common.Authorization = auth
  client.defaults.headers.common.Accept = 'multipart/form-data'
  //   client.defaults.headers['Accept-language'] = i18n.language

  const onSuccess = (response: any) => {
    return response
  }
  const onError = (error: any) => {
    // toast.error(`${error.message}, ${options.url}`)

    return Promise.reject(error)
  }

  return client(options).then(onSuccess).catch(onError)
}
