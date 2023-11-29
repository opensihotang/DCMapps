import { baseUrl } from "../../config/api";
import {
    ITEMS_LOADING,
    ITEMS_SUCCESS,
    ITEM_LOADING,
    ITEM_SUCCESS,
    CATEGORY_SUCCESS,
    CATEGORY_LOADING,
    LOGIN_LOADING,
    LOGIN_SUCCESS
} from './actionType'

export const access_token = localStorage.getItem("access_token")

export const loginSuccess = (payload) => {
    // console.log(payload, "ini payload");
    return {
        type : LOGIN_SUCCESS,
        payload
    }
}

export const fetchItemSuccess = (payload) => {
    return {
        type : ITEMS_SUCCESS,
        payload
    }
}

export const fetchItemLoading = (payload) => {
    return {
        type : ITEMS_LOADING,
        payload
    }
}

export const fetchItemByidSuccess = (payload) => {
    return {
        type : ITEM_SUCCESS,
        payload
    }
}

export const fetchItemByIdLoading = (payload) => {
    return {
        type : ITEM_LOADING,
        payload
    }
}

export const fetchCategorySuccess = (payload) => {
    return {
        type : CATEGORY_SUCCESS,
        payload
    }
}

export const fetchCategoryLoading = (payload) => {
    return {
        type : CATEGORY_LOADING,
        payload
    }
}

export function loginUser(userData){
    return async(dispatch, getState) => {
        try {
            const response = await fetch(`${baseUrl}/login`,{
                method : "POST",
                body : JSON.stringify(userData),
                headers : {
                    "Content-Type" : "application/json"
                }
            })
            const responseJSON = await response.json();
            if (!response.ok) {
                throw(responseJSON);
            }
            localStorage.setItem("access_token", responseJSON)
             dispatch(fetchItemSuccess())
             dispatch(fetchItem())
            // console.log(responseJSON, "ini accessToken");
            return dispatch(loginSuccess(responseJSON));
        } catch (err) {
            throw(err)
        }
    }
}

export function registerUser(userData){
    return async(dispatch, getState) => {
        try {
            if (!userData.username || !userData.email || !userData.password || !userData.phoneNumber || !userData.address){
                throw new Error("All field is Required")
            }
            const response = await fetch(`${baseUrl}/register`, {
                method : "POST",
                body : JSON.stringify(userData),
                headers : {
                    "Content-Type" : "application/json",
                    access_token : localStorage.access_token
                }
            })
        } catch (err) {
            throw (err)
            
        }
    }
}

export function logoutUser(){
    localStorage.clear();
}

export function fetchItem(){
    // console.log(access_token, "ini di fetch item");
    return async (dispatch, getState) => {
        dispatch (fetchItemLoading(true))
        try {
            const response = await fetch(`${baseUrl}/items`, {
                headers : {
                    access_token : localStorage.access_token
                }
            })
            const responseJSON = await response.json()
            dispatch(fetchItemSuccess(responseJSON))
        } catch (err){
            console.log(err);
        } finally {
            dispatch(fetchItemLoading(false))
        }
    }
}

export function fetchItemById(id){
    return async(dispatch, getState) => {
        dispatch(fetchItemLoading(true))
        try {
            const response = await fetch(`${baseUrl}/items/${+id}`, {
                headers : {
                    access_token : localStorage.access_token
                }
            })
            const responseJSON = await response.json()
            // console.log(responseJSON, "respon di act");
            dispatch(fetchItemByidSuccess(responseJSON))
        } catch (err) {
            console.log(err);
        }
    }
}

export function addItem(payload){
    // console.log(payload);
    return async (dispatch) => {
        try {
            if (!payload.name || !payload.description || !payload.price || !payload.imgUrl || !payload.categoryId){
                throw new Error("All field is Required")
            }
            const response = await fetch(`${baseUrl}/items`, {
                method : "POST",
                body : JSON.stringify(payload),
                headers : {
                    "Content-Type" : "application/json",
                    access_token : localStorage.access_token
                }
            })
            dispatch(fetchItem())
        } catch(err){
            throw(err)
            // console.log(err);
        }
    }
}

export function editItem(payload, itemId){
    // console.log(payload);
    return async (dispatch) => {
        try {
            const response = await fetch(`${baseUrl}/items/${itemId}`, {
                method : "PUT",
                body : JSON.stringify(payload),
                headers : {
                    "Content-Type" : "application/json",
                    access_token : localStorage.access_token
                }
            })
            dispatch(fetchItem())
        } catch(err){
            console.log(err);
        }
    }
}

export function deleteItem(itemId){
    return async (dispatch) => {
        try {
            const response = await fetch(`${baseUrl}/items/${itemId}`, {
                method : "DELETE",
                headers : {
                    "Content-Type" : "application/json",
                    access_token : localStorage.access_token
                }
            })
            if (!response.ok) throw new Error("Data not found")
            dispatch(fetchItem())
        } catch(err){
            console.log(err);
        }
    }
}

export function fetchCategory(){
    return async (dispatch, getState) => {
        dispatch(fetchCategoryLoading(true))
        try {
            const response = await fetch(`${baseUrl}/categories`, {
                headers: {
                    access_token : localStorage.access_token
                  },
            })
            const responseJSON = await response.json()
            // console.log(responseJSON);
            dispatch(fetchCategorySuccess(responseJSON))
        }catch (err){
            console.log(err, "ini error baru");
        } finally {
            dispatch(fetchCategoryLoading(false))
        }
    }
}

export function addCategory(payload){
    return async (dispatch) => {
        try {
            const response = await fetch(`${baseUrl}/categories`, {
                method : "POST",
                body : JSON.stringify(payload),
                headers : {
                    "Content-Type" : "application/json",
                    access_token : localStorage.access_token
                }
            })
            dispatch(fetchCategory())
        }catch(err){
            console.log(err);
        }
    }
}

export function deleteCategory(categoryId){
    return async (dispatch) => {
        try {
            const response = await fetch(`${baseUrl}/categories/${categoryId}`, {
                method : "DELETE",
                headers : {
                    "Content-Type" : "application/json",
                    access_token : localStorage.access_token
                }
            })
            if(!response.ok) throw new Error("Data not found")
            dispatch(fetchCategory())
        } catch(err){
            console.log(err);
        }
    }
}

export function editCategory(payload, categoryId){
    return async (dispatch) => {
        try {
            const response = await fetch(`${baseUrl}/categories/${categoryId}`, {
                method : "PUT",
                body : JSON.stringify(payload),
                headers : {
                    "Content-Type" : "application/json",
                    access_token : localStorage.access_token
                }
            })
            dispatch(fetchCategory())
           
        } catch(err){
            console.log(err);
            throw(err)
        }
    }
}