export const getAppDetails = (data) => {
    return {
        type: 'APP_DETAILS',
        payload: data
    }
}

export const addFolder = (data) => {
    return {
        type: 'ADD_FOLDER',
        item: data
    }
}

export const removeItem = (data) => {
    return {
        type: 'REMOVE_CARD',
        item: data
    }
}