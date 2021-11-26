const arr=[]

const favReducer=(state=arr,action)=>{
    switch(action.type){
        case 'addfav':
            return (
                [...state,action.payload]
            )
        case 'removefav':
            return(
                [...state.filter(fav=>fav.Title!==action.payload.Title)]
            )
        default:
            return []
    }
}
export default favReducer