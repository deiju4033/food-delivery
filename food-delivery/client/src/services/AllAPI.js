import {BASE_URL} from './base_url';
import {commonAPI} from './CommonApi';


export const registerUser = async(body)=>{
    console.log('submit');

    return commonAPI("POST", `${BASE_URL}/register`,body)
}

export const loginUser = async(body)=>{
    return commonAPI("POST", `${BASE_URL}/login`,body)
}

export const getAllFoods = async(search)=>{
    console.log(search);
    return commonAPI("GET", `${BASE_URL}/allfoods?search=${search}`,"")
}

export const orderfood = async(body)=>{
    return commonAPI("POST", `${BASE_URL}/order`,body)
}

export const getAllusers = async()=>{
    return commonAPI("GET", `${BASE_URL}/allusers`,"")
}

export const getAllorders = async()=>{
    return commonAPI("GET", `${BASE_URL}/allorders`,"")
}

export const forgotPassword = async(body)=>{
    return commonAPI("POST", `${BASE_URL}/forgotpassword`,body)
}

export const allUsersCount = async()=>{
    return commonAPI("GET", `${BASE_URL}/alluserscount`,"")
}

export const allOrdersCount = async()=>{
    return commonAPI("GET", `${BASE_URL}/allorderscount`,"")
}
