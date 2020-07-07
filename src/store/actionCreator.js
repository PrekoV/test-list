export const actionCreator = (type, payload = {}, err = "") => {
    return {
        type,
        payload,
        err
    }
}