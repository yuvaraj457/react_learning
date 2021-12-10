import axios from "axios"
import { url } from '../config.json'


export const login = async () => {
    const {data} = await axios.get(url.login)
    return data
}

export const logout = async () => {
    axios.post(url.logout)
}

export const about = async () => {
    const data = await axios.get(url.about)
    return data
}