import axios from 'axios'

const apiBreakingBad = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/',
  headers: {
    'content-type':'application/json;charset=utf-8',
  }
})

export default apiBreakingBad