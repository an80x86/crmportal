export default function(state={menuList:[]},action){

    switch(action.type){
        case 'GET_MENUS_ALL':
            return {...state,menuList:action.payload}
        default:
            return state;
    }

}
