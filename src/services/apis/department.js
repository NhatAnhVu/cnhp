import axiosInstance from '../axios';

export const GetDepartment = () => {
    return axiosInstance.get('Department/getAll');
};
