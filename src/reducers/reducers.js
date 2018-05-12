const appReducer = (state = {
    folderList: []
}, action) => {

    switch (action.type) {
        case 'APP_DETAILS':
        debugger
            let appContent = {};
            action.payload.forEach(element => {
                appContent = Object.assign({}, appContent, state, { [element.type]: element.list } )
            });

                return appContent;
        case 'ADD_FOLDER' :
            const updatedFolderList = [ ...state.folderList, action.item ];
            debugger
            return Object.assign({}, state, { folderList: updatedFolderList })
        
        case 'REMOVE_CARD':
            const { type, title } = action.item;

            const newList = state[type].filter((eachList) => eachList.title !== title);
            return Object.assign({}, state, {[type]: newList})
        default:
            return state
    }
}
  
export default appReducer;