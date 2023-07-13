import React, { useState } from 'react'
import { Button, Col, Divider, Row } from 'antd';
import { Card } from 'antd';
import { Input } from 'antd';
import { Space, Table, Tag } from 'antd';
import { Wapper } from './style';
import {DeleteOutlined, EditOutlined, PlusCircleOutlined, PlusSquareFilled} from '@ant-design/icons'
import { Typography } from 'antd';
const { Title } = Typography;

const style = (background) => {
    return {
        background: `${background}`,
        padding: '8px 0',
        height: '100%',
        borderRadius: '8px'
    }
}

const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
    },
    {
      title: 'Tên thẻ',
      dataIndex: 'tenThe',
      key: 'tenThe',
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      key: 'moTa',
    },
]

const data = [
    {
        stt: '1',
        tenThe: 'test1',
        moTa: 'Mo ta 1',
    },
    {
        stt: '2',
        tenThe: 'test2',
        moTa: 'Mo ta 2',
    },
    {
        stt: '3',
        tenThe: 'test3',
        moTa: 'Mo ta 3',
    },
];

const { Search } = Input;

const onSearch = (value) => console.log(value);

const CategoryCard = () => {

  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (record) => {
    setSelectedRow(record);
  }

  console.log(selectedRow);

//   const handleClickRow = (record) => {
    
//   }

  return (
    <Wapper>
        <Row
        gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
        }}
        >
        <Col className="gutter-row" span={16}>
            <Search
            placeholder="Nhập tên thẻ"
            onSearch={onSearch}
            style={{
                width: '100%',
            }}
            />
            <div style={style('#fff')}>
            <Card
                title="Danh sách thẻ"
                bordered={false}
                style={{
                    width: '100%',
                }}
            >
                <Table 
                columns={columns} 
                dataSource={data} 
                bordered
                onRow={(record) => ({
                    onClick: () => handleRowClick(record),
                  })}
                />
            </Card>
            </div>
        </Col>
        <Col className="gutter-row" span={8} style={{height: '100vh'}}>
            <div style={style('#f7f7f7')}>
                <Row>
                    <Col span={8}>
                        <h1
                            style={{
                                marginLeft: '20px',
                                fontWeight: 600,
                                fontSize: '16px',
                                marginTop: '8px'
                            }}
                        >
                            {
                                selectedRow ? "Cập nhật thẻ" : "Thêm thẻ"
                            }
                        </h1>
                    </Col>
                    <Col span={8} offset={8} >
                        <div style={{float: 'right', marginRight: '8px'}}>
                            <PlusCircleOutlined style={{marginRight: '12px',fontSize: '16px', marginTop: '8px'}}/>
                            <EditOutlined style={{marginRight: '12px',fontSize: '16px', marginTop: '8px'}}/>
                            <DeleteOutlined style={{marginRight: '12px',fontSize: '16px', marginTop: '8px'}}/>
                        </div>
                    </Col>
                </Row>

                <Row style={{margin: '10px 0 0 20px'}}>
                    <Title level={5} > Tên thẻ
                    <span style={{color: 'red'}}>*</span>
                    </Title>
                    {
                        selectedRow ?   (
                            <>
                                <Input placeholder="Nhập tên" value={selectedRow.tenThe}/>
                            </>
                        ) : (
                            <>
                            <Input placeholder="Nhập tên" value=""/>
                        </>
                        )
                    }
                </Row>

                <Row style={{margin: '10px 0 0 20px'}}>
                    <Title level={5} >Mô tả
                    <span style={{color: 'red'}}>*</span>
                    </Title>
                    {
                        selectedRow ? (
                            <>
                                <Input placeholder="Nhập mô tả" value={selectedRow.moTa} style={{height: '90px'}}/>
                            </>
                        ) : (
                            <Input placeholder="Nhập mô tả" value="" style={{height: '90px'}}/>
                        )
                    }
                </Row>

                <Row justify="end" style={{margin: '20px 20px 0 0'}}>
                    <Button type='primary' style={{float: 'right', display: 'block', background: 'var(--btn-primary-color)', width: '108px'}}>Ghi lại</Button>
                </Row>
            </div>
        </Col>
        </Row>
    </Wapper>
  )
}

export default CategoryCard