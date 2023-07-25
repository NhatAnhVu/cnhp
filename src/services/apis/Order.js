import axios from "axios";
import axiosInstance from "../axios";

export const GetAllOrderForAdmin = (body) => {
    return axiosInstance.post('Order/GetAllOrdersForAdmin', body)
}

export const GetOrderDetails = (OrderID) => {
    return axiosInstance.get(`Order/GetOrderDetails?OrderID=${OrderID}`)
}

export const UpdateOrder = (body) =>{
    return axiosInstance.post('Order/Update',body)
}

export const CancelOrder = (body) =>{
    return axiosInstance.post('Order/CancelOrder',body)
}