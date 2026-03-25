import axios from "axios";
import { LOGIN, REGISTER } from "./ApiUrls"


export const LOGINUSER=async(cred)=>{  // cred => credentails
    const {data}=await axios.post(LOGIN, cred);
    return data
}
export const REGISTERUSER=async(payload)=>{
    const {data}=await axios.post(REGISTER,payload)
    return data
}