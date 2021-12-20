import axios from 'axios'

import {targetUrl} from '../config.json'

export const axiosInstance = axios.create({
    baseURL : targetUrl
})
