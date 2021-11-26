import React, { useState } from "react";
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {addfav} from '../actions'
import {removefav} from '../actions'
import Favourites from "./favourites";
//import {movieslist} from '../actions'
import './displaymovies.css'

function DisplayMovies(props){
    
    const dispatch=useDispatch()
    const addfavs=useSelector(state=>state.addfavs)
    console.log('1',addfavs)
    const getinfo=(id,ind)=>{
        axios.get(`https://www.omdbapi.com/?i=${id} &r=json &apikey=c3d7b148`)
                .then((response)=>{
                    document.getElementById(`actors${ind}`).innerHTML=`<b>Actors :</b>`+response.data.Actors
                    document.getElementById(`awards${ind}`).innerHTML='<b>Awards :</b>'+response.data.Awards
                    document.getElementById(`director${ind}`).innerHTML='<b>Director :</b>'+response.data.Director

                    // console.log('imdbid',response.data)
                })
                .catch((error)=>{console.log('error')})
    }
    return(
        <div>
        <p><b>Your Favourites </b> {addfavs.length}</p>
        {addfavs.length>0 && <Favourites/>}
        <div className="MoviesList row Row">         
            {Object.values(props.moviedata.map((each,ind)=>{
                return(
                    <div className="col-md-3 col-sm-4 col-6 BOX" key={ind}>
                        <h3><b>Title :</b>{each.Title}</h3>
                        <p><b>Year :</b>{each.Year}</p>
                        <p><b>Type :</b>{each.Type}</p>
                        <img src={each.Poster} alt='poster not found'></img>
                        {getinfo(each.imdbID,ind)}
                        <p id={'director'+ind}></p>
                        <p id={'actors'+ind}></p>
                        <p id={'awards'+ind}></p>
                        <button className="btn btn-success button" onClick={()=>dispatch(addfav({Title:each.Title,Poster:each.Poster}))}>add to favourite</button>
                        {/* <button onClick={()=>dispatch(removefav({Title:each.Title,Poster:each.Poster}))}>removeFav</button> */}

                    </div>
                )
            }))}
        </div>
        </div>
    )
}
export default DisplayMovies