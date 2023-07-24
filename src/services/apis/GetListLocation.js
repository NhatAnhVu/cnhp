import axiosInstance from "../axios";

export const GetListLocation = (body) => {
    return axiosInstance.get('Region/GetAllChidrenByRegionId', body)
}