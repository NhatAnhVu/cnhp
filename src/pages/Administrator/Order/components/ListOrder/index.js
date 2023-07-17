import React, { useState } from 'react';
import { Button, Col, Divider, List, Modal, Row, Table } from 'antd';
import { TableStyled, WrapperProduct, WrapperProductQuantity } from './styles';
import { EyeOutlined } from '@ant-design/icons/lib/icons';
import OrderDetail from '../OrderDetail';
const columns = [
    {
        title: 'STT',
        dataIndex: 'key',
    },
    {
        title: <div className='title'>
            <span>Mã đơn hàng</span>
            <br />
            <span className='italic'>Người yêu cầu</span>
        </div>,
        dataIndex: 'age',
        render: (_, record) => (
            <div>
                <span>{record.orderID}</span>
                <br />
                <span className='italic'>{record.name}</span>
            </div>
        ),
    },
    {
        title: 'Tên sản phẩm',
        dataIndex: 'products',
        render: (_, record) => (
            <WrapperProduct>
                {record.products.map((product, index) => (
                    <>
                        <Row key={index} gutter={10}>
                            <Col>
                                <img className='product-image' src={product.image} />
                            </Col>
                            <Col>
                                <p className='product-name'>{product.productName}</p>
                                <p className='product-view'><span><EyeOutlined /></span>{product.view}</p>
                            </Col>
                        </Row>
                        {index !== record.products.length - 1 && <Divider className='custom-divider' />}
                    </>
                ))}

            </WrapperProduct>
        ),
    },
    {
        title: 'Số lượng',
        dataIndex: '',
        render: (_, record) => (
            <>
                {record.products.map((product, index) => (
                    <WrapperProductQuantity>
                        <div className='product-quantity'>{product.quantity} </div>
                        {index !== record.products.length - 1 && <Divider className='custom-divider' />}
                    </WrapperProductQuantity>
                ))
                }
            </>
        )
    },
    {
        title: <div className='title'>
            <span>Số điện thoại</span>
            <br />
            <span className='italic'>Địa chỉ</span>
        </div>,
        dataIndex: '',
        render: (_, record) => (
            <>
                <span>{record.phoneNumber}</span>
                <br />
                <span className='italic'>{record.address}</span>
            </>
        )
    },
    {
        title: <div className='title'>
            <span>Ngày yêu cầu</span>
            <br />
            <span className='italic'>Ngày giao hàng</span>
        </div>,
        dataIndex: 'age',
        render: (_, record) => (
            <>
                <span>{record.requestDate}</span>
                <br />
                <span className='italic'>{record.deliveryDate}</span>
            </>

        )
    },
    {
        title: 'Trạng thái',
        dataIndex: '',
        render: (_, record) => (
            <>
                {record.statusOrder === 4 ? (
                    <span className=' item-blue'>{record.statusOrderName}</span>
                ) : record.statusOrder === 3 ? (
                    <span className=' item-green'>{record.statusOrderName}</span>
                ) : record.statusOrder === 2 ? (
                    <span className='item-orange'>{record.statusOrderName}</span>
                ) : record.statusOrder === 1 ? (
                    <span className='item-black'>{record.statusOrderName}</span>
                ) : null}
            </>
        )
    },
];
const data = [
    {
        key: '1',
        orderID: '1',
        name: 'Tuong',
        phoneNumber: '0912341234',
        address: 'Ha Noi',
        requestDate: '22/11/2022',
        deliveryDate: '25/11/2022',
        statusOrder: 3,
        statusOrderName: 'Đã giao',
        products: [
            {
                productID: 'sp-1',
                image: require('../../../../../common/images/sanpham-1.png'),
                productName: 'Nước lọc đóng chai',
                quantity: 1,
                view: 1000,

            },
            {
                productID: 'sp-1',
                image: require('../../../../../common/images/sanpham-1.png'),
                productName: 'Nước lọc đóng chai',
                quantity: 1,
                view: 1000,

            },
            {
                productID: 'sp-1',
                image: require('../../../../../common/images/sanpham-1.png'),
                productName: 'Nước lọc đóng chai',
                quantity: 1,
                view: 1000,
            },
        ]

    },
    {
        key: '2',
        orderID: '2',
        name: 'Tuong',
        phoneNumber: '0912341234',
        address: 'Ha Noi',
        requestDate: '22/11/2022',
        deliveryDate: '25/11/2022',
        statusOrder: 2,
        statusOrderName: 'Chờ xác nhận',
        products: [
            {
                productID: 'sp-1',
                image: require('../../../../../common/images/sanpham-1.png'),
                productName: 'Nước lọc đóng chai',
                quantity: 1,
                view: 1000,
            },

        ]
    }

];

const ListOrder = () => {
    const [orderID, setOrderID] = useState();
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [showOrderDetail, setShowOrderDetail] = useState(false);

    const handleHide = () => {
        setShowOrderDetail(false)
    }
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const handleRowClick = (record,id) => {
        console.log('Clicked row data:', record);
        // Handle row click event
        setShowOrderDetail(true)
        setOrderID(id)
    };


    return (
        <div>
            <TableStyled
                bordered
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                onRow={(record) => ({
                    onClick: () => handleRowClick(record, record.orderID),
                })}
            />
            
                <OrderDetail
                    id={orderID}
                    visible={showOrderDetail}
                    onCancel={handleHide}
                />
            
        </div>
    );
};
export default ListOrder;