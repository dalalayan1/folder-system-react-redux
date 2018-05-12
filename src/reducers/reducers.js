const appReducer = (state = {
    directory: '/',
    directoryList: ['/'],
    folderList: [],
    folderStructure: {
        '/': {
            folderList: []
        }
    }
}, action) => {

    switch (action.type) {
        case 'APP_DETAILS':
            let appContent = {};
            action.payload.forEach(element => {
                appContent = Object.assign({}, appContent, state, { [element.type]: element.list } )
            });
            return appContent;

        case 'ADD_FOLDER' :
            const updatedFolderList = [ ...state.folderList, `${action.item}` ];
            state.folderStructure[`${state.directory}`].folderList = updatedFolderList;
            state.folderStructure[`${action.item}`] = { folderList: []};
            return Object.assign({}, state, { folderList: updatedFolderList })
        
        case 'CHANGE_DIRECTORY' :
            const updatedDirectoryList = [ ...state.directoryList, `${action.item}` ];
            const updatedFolderList1 = state.folderStructure[`${action.item}`].folderList;  
            return Object.assign({}, state, { directory: `${action.item}` }, { directoryList: updatedDirectoryList }, { folderList: updatedFolderList1 })
        
        case 'UPDATE_DIRECTORY_LIST' :
            state.directoryList.splice(`${action.item}`);
            const updatedDirectoryList1 = [ ...state.directoryList, `${action.item}` ];
            const updatedFolderList2 = state.folderStructure[`${action.item}`].folderList;  
            return Object.assign({}, state, { directory: `${action.item}` }, { directoryList: updatedDirectoryList1 }, { folderList: updatedFolderList2 })

        case 'REMOVE_CARD':
            const { type, title } = action.item;
            const newList = state[type].filter((eachList) => eachList.title !== title);
            return Object.assign({}, state, {[type]: newList})
        default:
            return state
    }
}
  
export default appReducer;