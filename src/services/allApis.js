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