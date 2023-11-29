import { baseUrl } from "../../config/api";

import {
    ITEMS_LOADING,
    ITEMS_SUCCESS,
    ITEM_LOADING,
    ITEM_SUCCESS
} from "./actionType"

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

export const fetchItemDetailSuccess = (payload) => {
    return {
        type : ITEM_SUCCESS,
        payload
    }
}

export const fetchItemDetailLoading = (payload) => {
    return {
        type : ITEM_LOADING,
        payload
    }
}

export function fetchItem(){
    return async (dispatch, getState) => {
        dispatch (fetchItemLoading(true))
        try {
            const response = await fetch(`${baseUrl}/pub/items`)
            const responseJSON = await response.json()
            dispatch(fetchItemSuccess(responseJSON))
        } catch (err){
            console.log(err);
        } finally {
            dispatch(fetchItemLoading(false))
        }
    }
}

export function fetchItemDetail(id){
    return async (dispatch, getState) => {
        dispatch (fetchItemDetailLoading(true))
        try {
            const response = await fetch(`${baseUrl}/pub/items/${id}`)
            const responseJSON = await response.json()
            dispatch(fetchItemDetailSuccess(responseJSON))
            // console.log(responseJSON);
        } catch (err){
            console.log(err);
        } finally {
            dispatch(fetchItemDetailLoading(false))
        }
    }
}