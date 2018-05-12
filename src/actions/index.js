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

export const changeDirectory = (data) => {
    return {
        type: 'CHANGE_DIRECTORY',
        item: data
    }
}

export const modifyDirectoryList = (data) => {
    return {
        type: 'UPDATE_DIRECTORY_LIST',
        item: data
    }
}

export const removeFolder = (data) => {
    return {
        type: 'REMOVE_FOLDER',
        item: data
    }
}