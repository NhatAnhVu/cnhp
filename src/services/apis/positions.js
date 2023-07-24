import axiosInstance from '../axios';

export const GetList = (body) => {
    return axiosInstance.post('Position/GetList', body);
};

export const UpdateListPosition = (body) => {
    return axiosInstance.put('Position/Update', body);
};

export const DeletePosition = (positionID) => {
    return axiosInstance.patch(`Position/Delete?PositionID=${positionID}`);
};

export const AddPosition = (body) => {
    return axiosInstance.post('Position/Create', body);
};
