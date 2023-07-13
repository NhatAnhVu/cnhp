import React, { useState } from 'react';
import CustomTabs from '../../../components/Tabs';
import { Image, Table } from 'antd';
import productImg from '../../../common/images/imageAdministrator_page/product.png';
import { EyeOutlined } from '@ant-design/icons';
import CustomButton from '../../../components/Button/ButtonPrimary';
import { colors } from '../../../styles';
import CustomModal from './components/Modal';
const Products = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            render: (value, record, index) => index + 1
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            render: (text) => (
                <a style={{ display: 'flex' }}>
                    <img src={productImg} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>{text}</span>
                        <div>
                            <EyeOutlined /> 1.000
                        </div>
                    </div>
                </a>
            )
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price
        },
        {
            title: 'Giảm Giá(%)',
            dataIndex: 'discout',
            sorter: (a, b) => a.discout - b.discout
        },
        {
            title: 'Kho hàng',
            dataIndex: 'warehouse',
            sorter: (a, b) => a.warehouse - b.warehouse
        },
        {
            title: 'Doanh số',
            dataIndex: 'revenue',
            sorter: (a, b) => a.revenue - b.revenue
        }
    ];
    const data = [
        {
            key: 1,
            name: `Sản phẩm nước uống tinh khiết HaiPhong Water - Thùng 24 chai 500ml`,
            price: 250000,
            discout: 50,
            warehouse: 500,
            revenue: 10
        },
        {
            key: 2,
            name: `Sản phẩm nước uống tinh khiết HaiPhong Water - Thùng 24 chai 500ml`,
            price: 300000,
            discout: 50,
            warehouse: 500,
            revenue: 10
        },
        {
            key: 3,
            name: `Sản phẩm nước uống tinh khiết HaiPhong Water - Thùng 24 chai 500ml`,
            price: 150000,
            discout: 50,
            warehouse: 500,
            revenue: 10
        }
    ];
    const items = [
        {
            key: '1',
            label: `Tất cả`,
            children: <Table columns={columns} dataSource={data} rowSelection={rowSelection} />
        },
        {
            key: '2',
            label: `Hết hàng`,
            children: ''
        }
    ];
    const hasSelected = selectedRowKeys.length > 0;
    const operations = (
        <div>
            <CustomButton onClick={showModal}>Thêm sản phẩm</CustomButton>
            <CustomButton backgroundColor="transparent" color={colors.black}>
                Thêm sản phẩm
            </CustomButton>
        </div>
    );
    return (
        <div>
            <CustomTabs items={items} title={'Danh sách'} operations={operations} />
            <div
                style={{
                    marginBottom: 16
                }}
            >
                <span
                    style={{
                        marginLeft: 8
                    }}
                >
                    {hasSelected}
                </span>
            </div>
            <CustomModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} />
        </div>
    );
};

export default Products;
