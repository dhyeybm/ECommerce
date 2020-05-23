import axios from 'axios';
import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING,GET_CART} from './types';
export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('http://localhost:5000/api/items',{crossdomain:true})
        .then(res => 
            dispatch({
                type:GET_ITEMS,
                payload:res.data
            }))
        .catch(err => {
            console.log(err);
        })
};
export const getCart = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('http://localhost:5000/api/cartitems',{crossdomain:true})
        .then(res => 
            dispatch({
                type:GET_CART,
                payload:res.data
            }))
        .catch(err => {
            console.log(err);
        })
};
export const deleteItem = (id) => dispatch => {
    axios.delete(`http://localhost:5000/api/cartitems/${id}`)
        .then(res => {
            dispatch({
                type:DELETE_ITEM,
                payload:id
            })
        })   
};
export const addItem = item => dispatch => {
    axios.post('http://localhost:5000/api/cartitems',item)
        .then(res => {
            dispatch({
                type:ADD_ITEM,
                payload:res.data
            })
        })
};
export const setItemsLoading = () => {
    return {
    type:ITEMS_LOADING
    };
};
 