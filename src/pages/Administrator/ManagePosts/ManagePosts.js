import React from 'react'
import {Row, Col, Card, Space, Input, Button, Table} from 'antd'
import { Tree } from 'antd';
import { Select } from 'antd';
import { WrapperManagePost } from './style';
import { useNavigate } from "react-router-dom";

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const { Search } = Input;
const onSearch = (value) => console.log(value);
const treeData1 = [
  {
    title: 'Chăm sóc khách hàng',
    key: '1',
    children: [
      {
        title: 'Các thủ tục khách hàng cần biết',
        key: '1-0',
        isLeaf: true,
      },
      {
        title: 'Thông tin khách hàng cần biết',
        key: '1-1',
        isLeaf: true,
      },
    ],
  },
  {
    title: 'Chất lượng nước',
    key: '2',
  },
  {
    title: 'Cổ đông',
    key: '3',
    children: [
      {
        title: 'Báo cáo quản trị',
        key: '3-0',
        isLeaf: true,
      },
      {
        title: 'Báo cáo tài chính',
        key: '3-1',
        isLeaf: true,
      },
      {
        title: 'Báo cáo thường niên',
        key: '3-2',
        isLeaf: true,
      },
      {
        title: 'Đại hội cổ đông thường niên',
        key: '3-3',
        isLeaf: true,
      },
      {
        title: 'Thông tin cổ đông',
        key: '3-4',
        isLeaf: true,
      },
    ],
  },
  {
    title: 'Tin tức',
    key: '4',
    children: [
      {
        title: 'Đảng và đoàn thể',
        key: '4-0',
        isLeaf: true,
      },
      {
        title: 'Hoạt động sản xuất kinh doanh',
        key: '4-1',
        isLeaf: true,
      },
      {
        title: 'Tin tức kinh doanh',
        key: '4-2',
        isLeaf: true,
      },
    ],
  },
];

const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
  },
  {
    title: 'TIÊU ĐỀ BÀI VIẾT',
    dataIndex: 'tieuDe',
  },
  {
    title: 'NGÀY ĐĂNG',
    dataIndex: 'ngayDang',
  },
  {
    title: 'TRẠNG THÁI',
    dataIndex: 'trangThai',
  },
];
const data = [
  {
    key: '1',
    stt: 'John Brown',
    tieuDe: 32,
    ngayDang: 'New York No. 1 Lake Park',
    trangThai: 'ok'
  },
];

const ManagePosts = () => {
  const navigate = useNavigate();

  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };
  const onExpand = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };
  return (
    <WrapperManagePost>
      <Row gutter={16}>
        <Col span={4}>
          <Card
            title="Danh sách danh mục"
            bordered={false}
          >
            <Tree
                  multiple
                  defaultExpandAll
                  onSelect={onSelect}
                  onExpand={onExpand}
                  treeData={treeData1}
            />
          </Card>
        </Col>

        <Col span={20}>
          <Card
            title="Danh sách bài viết"
          >
              <Row gutter={16}>
                  <Col span={16}>
                    <Space direction="vertical">
                      <Search
                        placeholder="Nhập tiêu đề bài viết"
                        onSearch={onSearch}
                        style={{
                          width: '930px',
                        }}
                      />
                    </Space>
                  </Col>
                  <Col span={5}>
                    <Select
                      mode="tags"
                      style={{
                        width: '100%',
                      }}
                      placeholder="Trạng thái"
                      onChange={handleChange}
                      options={options}
                    />
                  </Col>
                  <Col span={3}>
                      <Button type="primary" style={{background: 'var(--btn-primary-color)', width: '100%'}}
                          onClick={() => navigate("/dang-bai")}
                      >
                      Thêm bài viết
                      </Button>
                  </Col>
              </Row>
              <Row>
                  <Table columns={columns} dataSource={data} style={{width: '100%', marginTop: '20px'}}/>
              </Row>
          </Card>

        </Col>
      </Row>
    </WrapperManagePost>
  )
}

export default ManagePosts