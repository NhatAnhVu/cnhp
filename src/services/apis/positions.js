import axiosInstance from '../axios';

export const GetList = (body) => {
    return axiosInstance.post('Position/GetList', body);
};
