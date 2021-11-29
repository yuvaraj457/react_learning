import axios from "axios"
import { url } from '../config.json'

// axiosInstance.interceptors.request.use(
//     config => {
//         const token = getAuthToken()
//         console.log(token)
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`
//            }
//         return config;
//     },
//     error => {
//         console.log(Promise.reject(error))
//         return Promise.reject(error)
//       }
// )


export const login = async () => {
    const {data} = await axios.get(url.login)
    return data
}

export const logout = async () => {
    axios.post(url.logout)
}

export const about = async () => {
    const data = await axios.get(url.about)
    console.log(data)
    return data
}