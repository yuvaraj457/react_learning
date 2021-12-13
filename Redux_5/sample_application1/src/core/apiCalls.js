import axios from 'axios'
import { axiosInstance } from '.'
import {url} from '../config.json'

export const login = async () => {
    const {data} = await axiosInstance.post(url.login)
    return data
}

export const logOut = async () => {
    return await axiosInstance.post(url.logout)
}