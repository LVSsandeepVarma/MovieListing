import React, {useState } from "react";
import axios from 'axios'
//import {useSelector,useDispatch} from 'react-redux'
//import {addfav} from '../actions'
//import {movieslist} from '../actions'
import DisplayMovies from "./displaymovielist";
import './moviefetch.css'

function Movies(){
    // const addfavs=useSelector(state=>state.addfavs)
    // const moviedaata=useSelector(state=>state.moviesdata)
    // console.log('1',addfavs)
    // const [fav,setFav]=useState([])
    //const dispatch=useDispatch()
    const [moviedata,setMoviedata]=useState([])
    const  handleSearch=(e)=>{
        setTimeout(() => {
            axios.get(`https://www.omdbapi.com/?s=${e.target.value}&type?filteror(eq(Type,series),eq(Type,movie)) &r=json &apikey=c3d7b148`)
            .then(res=>{
                // console.log('in then',Object.values(res.data.Search))
                setMoviedata(Object.values(res.data.Search))
                //dispatch(movieslist([Object.values(res.data.Search)]))
            })
            .catch(err=>{
                console.log(`no movie named with ${e.target.value}`)})
            
        }, 2000);

    }

    // const getinfo=(id,ind)=>{
    //     const dat=axios.get(`https://www.omdbapi.com/?i=${id} &r=json &apikey=c3d7b148`)
    //             .then((response)=>{
    //                 document.getElementById(`actors${ind}`).innerHTML='Actors :'+response.data.Actors
    //                 document.getElementById(`awards${ind}`).innerHTML='Awards :'+response.data.Awards
    //                 document.getElementById(`director${ind}`).innerHTML='Director :'+response.data.Director

    //                 // console.log('imdbid',response.data)
    //             })
    //             .catch((error)=>{console.log('error')})
    // }
    
    return(
        <div>
            <div className="row">
                <div className="col-3 col-sm-1 col-md-1 bg-primary text-white p-3 " style={{textAlign:"center"}}>
                    MOVIE
                </div>
                <input className="col bg-dark text-white p-3" type="search" placeholder="SEARCH YOUR FAVOURITE MOVIES HERE" onInput={handleSearch}/>
            </div>
            <DisplayMovies moviedata={moviedata}></DisplayMovies>
        </div>
    )
}

export default Movies