import { Table, Tree } from "antd";
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchDepartment, fetchDepartmentParent } from "../../../../../reducers/departmentSlice";
const buildTreeData = (data) => {
  const treeData = [];
  data?.forEach((item) => {
    treeData.push({
      key: item.DepartmentID,
      title: item.DepartmentName,
      children: [], // Add children if needed
    });
  });
  return treeData;
};
function ListDepartment() {
  const dispatch = useDispatch();
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const [dataListView, setdataListView] = useState([]);
  const [dataListParentView, setdataListparentView] = useState([]);
  const listView = useSelector(
    (state) => state?.department?.department?.departmentGet?.Object
  );

  const listViewParent = useSelector(
    (state) => state?.department?.departmentParent?.departmentParentGet?.Object
  );

  const getList = () => {
    dispatch(fetchDepartment());
  };
  const getparentList = () => {
    dispatch(fetchDepartmentParent());
  };
  useEffect(() => {
    setdataListView(listView);
  }, [listView]);
  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    setdataListparentView(listViewParent);
  }, [listViewParent]);
  useEffect(() => {
    getparentList();
  }, []);

  const treeData = buildTreeData(dataListView);
  return (
    <>
      <Tree
        defaultExpandedKeys={["0-0-0", "0-0-1"]}
        defaultSelectedKeys={["0-0-0", "0-0-1"]}
        defaultCheckedKeys={["0-0-0", "0-0-1"]}
        onSelect={onSelect}
        treeData={treeData}
        style={{
          borderRadius: 10,
          border: "1px solid var(--border, #DDD)",
          background: "var(--white, #FFF)",
        }}
      />
    </>
  );
}

export default ListDepartment;
