const moviesdata=(state=[],action)=>{
    switch(action.type){
        case 'movieslist':
            return [...action.payload]
        default:
            return state
    }
}

export default moviesdata