import axiosInstance from '../axios';

export const GetList = (body) => {
    return axiosInstance.post('Position/GetList', body);
};

export const UpdateListPosition = (body) => {
    return axiosInstance.put('Position/Update', body);
};
