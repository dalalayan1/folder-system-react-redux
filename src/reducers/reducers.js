const appReducer = (state = {
    msg: '',
    directory: '/',
    directoryList: ['/'],
    folderList: [],
    folderStructure: {
        '/': {}
    }
}, action) => {

    switch (action.type) {
        
        case 'ADD_FOLDER' :
            let updatedFolderList = state.folderList;
            if( !(state.folderList).includes(`${action.item}`)) {
                updatedFolderList = [ ...state.folderList, `${action.item}` ];
            }
            let folderStructureObj = state.folderStructure;
            let updatedMsg = state.msg;
            state.directoryList.forEach((eachDirectory, index) => {
                folderStructureObj = folderStructureObj[eachDirectory];
            });
            if ( folderStructureObj[`${action.item}`] ) {
                updatedMsg = `Sorry! Folder "${action.item}" already exits!`;
            }
            else {
                folderStructureObj[`${action.item}`] = {};
                updatedMsg = `Folder "${action.item}" created successfully!`;
            }
            return Object.assign({}, state, { msg: updatedMsg }, { folderList: updatedFolderList })
        
        case 'CHANGE_DIRECTORY' :
            const updatedDirectoryList = [ ...state.directoryList, `${action.item}` ];
            let folderStructureObj1 = state.folderStructure, updatedMsg1 = state.msg;
            updatedDirectoryList.forEach((eachDirectory, index) => {
                folderStructureObj1 = folderStructureObj1[eachDirectory];
            });
            let updatedFolderList1 = [];
            
            if ( Object.keys(folderStructureObj1).length) {
                updatedFolderList1 = Object.keys(folderStructureObj1);
            }
            updatedMsg1 = `Entered folder "${action.item}"`;
            return Object.assign({}, state, { msg: updatedMsg1 }, { directory: `${action.item}` }, { directoryList: updatedDirectoryList }, { folderList: updatedFolderList1 })
        
        case 'UPDATE_DIRECTORY_LIST' :
            let updatedDirectoryList1 = [], matchedIdx;
            state.directoryList.forEach((eachDirectory, index) => {
                if ( eachDirectory === `${action.item}` ) {
                    matchedIdx = index;
                }
            });
            let folderStructureObj2 = state.folderStructure;
            updatedDirectoryList1 = state.directoryList.slice(0,matchedIdx+1);
            updatedDirectoryList1.forEach((eachDirectory, index) => {
                folderStructureObj2 = folderStructureObj2[eachDirectory];
            });
            let updatedFolderList2 = [], updatedMsg2;
            
            if ( Object.keys(folderStructureObj2).length) {
                updatedFolderList2 = Object.keys(folderStructureObj2);
            } 
            updatedMsg2 = `Moved to path "${action.item}"`;
            return Object.assign({}, state, { msg: updatedMsg2 }, { directory: `${action.item}` }, { directoryList: updatedDirectoryList1 }, { folderList: updatedFolderList2 })

        case 'REMOVE_FOLDER':
            let folderStructureObj3 = state.folderStructure, updatedMsg3;
            const updatedFolderList3 = state.folderList.filter((item) => { return item !== `${action.item}` })
            state.directoryList.forEach((eachDirectory, index) => {
                folderStructureObj3 = folderStructureObj3[eachDirectory];
            });
            delete folderStructureObj3[`${action.item}`];
            updatedMsg3 = `Deleted "${action.item}" successfully!`;
            return Object.assign({}, state, { msg: updatedMsg3 }, { folderList: updatedFolderList3 })
        default:
            return state
    }
}
  
export default appReducer;