export const addfav=(movie)=>{
    return{
        type:'addfav',
        payload:movie
}
}

export const removefav=(movie)=>{
    return{
        type:'removefav',
        payload:movie
    }
}

export const movieslist=(moviedata)=>{
    return{
        type:'movieslist',
        payload:moviedata
    }
}