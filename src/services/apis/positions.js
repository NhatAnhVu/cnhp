import axiosInstance from '../axios';

export const GetList = () => {
    return axiosInstance.get('Position');
};

export const UpdateListPosition = (body) => {
    return axiosInstance.patch('Position/update', body);
};

export const DeletePosition = (body) => {
    return axiosInstance.delete(`Position/delete`, body);
};

export const AddPosition = (body) => {
    return axiosInstance.post('Position/insert', body);
};
