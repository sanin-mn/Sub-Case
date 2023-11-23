import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonApi";

// register api
export const registerApi = async (user)=>{
   return await commonAPI("POST",`${BASEURL}/user/register`,user,"")
}