import React from 'react';
import { Space, Table, Tag } from 'antd';
import { TableStyled } from './styles';
const columns = [
    {
        title: 'STT',
        dataIndex: 'key',
        key: 'stt',
    },
    {
        title: 'Mã hoá đơn',
        dataIndex: 'billID',
        key: 'billID',
    },
    {
        title: (
            <div className='title'>
                <span>Mã khách hàng</span>
                <br />
                <span className='italic'>Tên khách hàng</span>
            </div>
        ),
        dataIndex: '',
        key: 'name',
        render: (_, record) => (
            <div>
                <span>{record.customerID}</span>
                <br />
                <span className='italic'>{record.name}</span>
            </div>
        ),
    },
    {
        title: (
            <div className='title'>
                <span>Số điện thoại</span>
                <br />
                <span className='italic'>Địa chỉ</span>
            </div>
        ),
        dataIndex: '',
        key: '',
        render: (_, record) => (
            <div>
                <span>{record.phoneNumber}</span>
                <br />
                <span className='italic'>{record.address}</span>
            </div>
        ),
    },
    {
        title: (
            <div className='title'>
                <span >Chỉ số mới</span>
                <br />
                <span className='italic'>Chỉ số cũ</span>
            </div>
        ),
        dataIndex: '',
        key: '',
        render: (_, record) => (
            <div>
                <span>{record.newIndex}</span>
                <br />
                <span className='italic'>{record.oldIndex}</span>
            </div>
        ),
    },

    {
        title: 'Tiêu thụ',
        dataIndex: 'address',
        key: 'address',
        render: (_, record) => (
            <div>
                <span>{record.newIndex - record.oldIndex}</span>

            </div>
        ),
    },
    {
        title: 'Số tiền',
        dataIndex: 'total',
        key: 'total',
    },
    {
        title: 'Trạng thái',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, record) => (

            <div>
                {record.status === 'dang-thu' ? (
                    <span className='item-blue'>Đang thu</span>
                ) : record.status === 'chua-nhap' ? (
                    <span className='item-orange'>Chưa nhập hoá đơn mới</span>
                ) : record.status === 'da-thanh-toan' ? (
                    <span className='item-green'>Đã thanh toán</span>
                ) : record.status === 'qua-han' ? (
                    <span className='item-red'>Quá hạn nộp</span>
                ) : null}
            </div>

        ),
    },

];
const data = [
    {
        key: '1',
        billID: '0001',
        customerID: '01232423',
        name: 'John Brown',
        phoneNumber: '0972324324',
        address: 'Ha Noi',
        newIndex: '100',
        oldIndex: '50',
        total: '500000',
        status: 'dang-thu'
    },
    {
        key: '2',
        billID: '0002',
        customerID: '01232423',
        name: 'John Brown',
        phoneNumber: '0972324324',
        address: 'Ha Noi',
        newIndex: '100',
        oldIndex: '50',
        total: '500000',
        status: 'chua-nhap'
    },

];
const ListBill = () => (
    <TableStyled
        columns={columns}
        dataSource={data}
        bordered
    />
);
export default ListBill;