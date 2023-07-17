import React, { useState } from 'react';
import { Card, Row } from 'antd';
import { Button, Table } from 'antd';
import { ButtonAddUnits, Wapper, WapperTable } from '../Style/style';
import { Modal } from 'antd';
import ModalAddUnits from '../../pages/Administrator/Units/ModalAddUnits';
import SearchStatus from '../../pages/Administrator/Units/SearchStatus';

const columnsToQuanLy = [
  {
    title: 'STT',
    dataIndex: 'stt'
  },
  {
    title: 'Tài khoản',
    dataIndex: 'account'
  },
  {
    title: 'Mã tổ quản lý',
    dataIndex: 'maToQuanLy'
  },
  {
    title: 'Tên tổ quản lý',
    dataIndex: 'tenToQuanLy'
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'sdt'
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address'
  },
  {
    title: 'Khu vực quản lý',
    dataIndex: 'khuVuc'
  },
  {
    title: 'Nhân viên',
    dataIndex: 'nv'
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status'
  },
];

const data = [];
for (let i = 0; i < 9; i++) {
  data.push({
    // key: i,
    stt: i,
    account: `account${i}`,
    maToQuanLy: `maToQuanLy ${i}`,
    tenToQuanLy: `tenToQuanLy ${i}`,
    sdt: `sdt ${i}`,
    address: `address ${i}`,
    khuVuc: `khuVuc ${i}`,
    nv: `nv ${i}`,
    status: `status ${i}`,
  });
}

const TableCommon = (props) => {
  const {title} = props
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isVisible, setIsVisiable] = useState(false)

  // const handleOk = () => {
  //   setIsVisiable(false)
  // }

  const handleShowModal = () => {
    setIsVisiable(true);
  };
  const handleHideModal = () => {
    setIsVisiable(false);
  };

  const isShowModal = () => {
    setIsVisiable(true)
  }
  
  const showModal = () => {
    setIsVisiable(true)
  }
  
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <>
      <SearchStatus />
      <Wapper>
          <Card
            title={title}
            bordered={false}
            style={{
              width: '100%',
            }}
          >
            <div>
              <div
                style={{
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    marginLeft: 8,
                  }}
                >
                </span>
              </div>
              <WapperTable columns={columnsToQuanLy} dataSource={data} bordered/>
          </div>
          </Card>

          <ButtonAddUnits type="primary" style={{background: 'var(--btn-primary-color)'}} onClick={handleShowModal}>
              Thêm tổ quản lý
          </ButtonAddUnits>
          
          <ModalAddUnits 
            title="Thêm tổ quản lý"
            // onOk={handleOk}
            handlehideModal={handleHideModal}
            isModalVisiable={isVisible}
            okText="Đồng ý"
            cancelText="Hủy"
          />
      </Wapper>
    </>
  )
}

export default TableCommon