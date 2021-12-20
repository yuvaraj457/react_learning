import { axiosInstance } from '.'
import {url} from '../config.json'

export const login = async (formData) => {
    const {data} = await axiosInstance.post(url.login, formData)
    return data
}

export const logOut = async () => {
    return await axiosInstance.post(url.logout)
}