import { todoAdd } from "./actionType"

export const todo = (item) => {
    return {
        type : todoAdd,
        payload : item
    }
}
