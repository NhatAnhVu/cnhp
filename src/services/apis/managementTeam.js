import axiosInstance from "../axios";

//d/s to quan ly theo trang thai, khu vuc
export const getListManagementTeam = (body) => axiosInstance.post("ManagementTeam/GetListManagementTeam", body)

// lay all danh sach to quan ly
export const getAll = () => axiosInstance.get("ManagementTeam/GetAll");

//create
export const createManagementTeam = (body) => axiosInstance.post("/ManagementTeam/CreateManagementTeam", body)

//delete
export const deleteManagementTeam = (id) => axiosInstance.delete(`ManagementTeam/DeleteManagementTeam?ManagementTeamID=${id}`);

//update
export const updateManagementTeam = (body) => axiosInstance.put("ManagementTeam/UpdateManagementTeam", body);

//get list tinh thanh
export const getRegion = (id) => axiosInstance.get(`Region/GetRegionByParentId?ParentID=${id}`)