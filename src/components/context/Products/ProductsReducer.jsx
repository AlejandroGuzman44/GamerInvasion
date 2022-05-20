import { GET_FILTERED_PRODUCTS } from "../types";

export default (state, action) => {
    const {payload, type} = action;

    switch(type) {
        case GET_FILTERED_PRODUCTS: 
            return{
                ...state,
                users: payload
            }
        default:
            return state;
    }
}