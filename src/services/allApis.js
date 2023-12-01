import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonApi";

// register api
export const registerApi = async (user)=>{
   return await commonAPI("POST",`${BASEURL}/user/register`,user,"")
}

// login api
export const loginApi = async (user)=>{
    return await commonAPI("POST",`${BASEURL}/user/login`,user,"")   
}

// addMovie details api
export const addMovieAPI = async (movie,header)=>{
    return await commonAPI("POST",`${BASEURL}/movie/add`,movie,header)   
}

// get all movie for admin
export const adminMovieAPI = async (header)=>{
    return await commonAPI("GET",`${BASEURL}/admin/movies`,"",header)   
}

// home movies
export const homeMovieAPI = async ()=>{
    return await commonAPI("GET",`${BASEURL}/home/homemovies`,"","")   
}

// all movies
export const allMovieAPI = async ()=>{
    return await commonAPI("GET",`${BASEURL}/movies/all`,"","")   
}

// searched movies
export const searchMovieAPI = async (searchKey)=>{
    return await commonAPI("GET",`${BASEURL}/movies/search?search=${searchKey}`,"","")   
}

// edit movie
export const editMovieAPI = async (movieId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASEURL}/movie/edit/${movieId}`,reqBody,reqHeader)   
}

// delete movie
export const deleteMovieAPI = async (movieId,reqHeader)=>{
    return await commonAPI("DELETE",`${BASEURL}/movie/delete/${movieId}`,{},reqHeader)   
}


