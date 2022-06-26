import axios from "../../../api/axios"
import { startLoading, 
    fetchAll, 
    fetchOne,
    addToCart
} from "./productSlice"

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

export const addProductToCart=(product)=>{
    return async dispatch => {
        dispatch(startLoading())
        dispatch(addToCart({product}))
    }
}