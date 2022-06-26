import axios from "../../../api/axios"
import { startLoading, fetchAll, fetchOne } from "./productSlice"

export const getProducts=()=>{
    return async dispatch => {

        dispatch(startLoading())

        const {data} = await axios.get('products');

        dispatch(fetchAll({products: data}))

    }
}


export const getProductById=(id)=>{
    return async dispatch => {

        dispatch(startLoading())

        const {data} = await axios.get(`products/${id}`);
        dispatch(fetchOne({product: data}))

    }
}