
import { axiosInstance } from '.'
import {url} from '../config.json'
import { getAuthToken } from '../shared/sessionStorage'

export const user = async () => {
    const data = await axiosInstance.post(url.login)
    return data
}

export const userVerify = async () => {
    const data = await axiosInstance.get(url.userVerify, 
        { 
            headers: { 'auth-token': getAuthToken() } 
    })
    return data.data
}