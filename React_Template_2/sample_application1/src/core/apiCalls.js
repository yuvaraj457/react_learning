import { axiosInstance } from "."

export const posts = () => {
    const data = axiosInstance.get('/posts')
    return data
}