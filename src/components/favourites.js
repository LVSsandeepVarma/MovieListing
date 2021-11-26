import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import {removefav} from '../actions'
import './favourites.css'

function Favourites(){
    const dispatch=useDispatch()
    const favourites=useSelector(state=>state.addfavs)
    console.log('favs',favourites)
    return(
        <div className="MoviesList row Row">
            <h1>Favourites List</h1>
            <div className="scroll">
            {Object.values(favourites).map((data,ind)=>{
                return(
                    <div className="scrolling">
                    <div>
                        
                        <h3><b>Title</b> {data.Title}</h3>
                        <img className="img" src={data.Poster} alt="poster not found"/>
                    </div>
                    <button className="btn btn-danger button redbutton" onClick={()=>dispatch(removefav({Title:data.Title,Poster:data.Poster}))}>removeFav</button>

                    </div>
                    
                )
            })}
            </div>
        </div>
    )
}

export default Favourites