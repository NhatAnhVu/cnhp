import React from 'react';
import { Button, Col, Dropdown, Input, Row, Space } from 'antd';

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
  ];
const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchStatus = () => {
  return (
    <>
        <Row gutter={16}>
            <Col span={8} >
                <Space direction="vertical" >
                    <Search
                        placeholder="Nhập mã, tên, SĐT khách hàng"
                        onSearch={onSearch}
                        style={{
                            width: 560,
                        }}
                    />
                </Space>    
            </Col>
            <Col span={4}>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomLeft"
                    arrow
                    style={{width: '100vh'}}
                    >
                    <Button style={{width: '100%'}}>Đang hoạt động</Button>
                </Dropdown>
            </Col>
            <Col span={4}>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomLeft"
                    arrow
                    >
                    <Input placeholder='Tỉnh/Thành phố'/>
                </Dropdown>
            </Col>
            <Col span={4}>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomLeft"
                    arrow
                    >
                    <Input placeholder='Quận/Huyện'/>
                </Dropdown>
            </Col>
            <Col span={4}>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomLeft"
                    arrow
                    >
                    <Input placeholder='Xã/Phường'/>
                </Dropdown>
            </Col>
        </Row>
    </>
  )
}

export default SearchStatus