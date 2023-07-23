import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { Button, Dropdown, Modal } from 'antd';
import {  CalendarOutlined } from '@ant-design/icons';
import { Col, Divider, Row } from 'antd';
import img1 from '../../../common/images/imageAdministrator_page/tongbaoicon1.svg'
import img2 from '../../../common/images/imageAdministrator_page/thongbaoicon2.svg'
import img3 from '../../../common/images/imageAdministrator_page/thongbaoicon3.svg'
import img4 from '../../../common/images/imageAdministrator_page/thongbaoicon4.svg'
import img5 from '../../../common/images/imageAdministrator_page/thongbaoicon5.svg'
import img6 from '../../../common/images/imageAdministrator_page/thongbaoicon6.svg'
import { Dots } from '../../../styles';
import { Wapper, WapperModal } from './style';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import TableComponent from './Taable';
import Modals from './Modals';
import ModalListCustorm from './ModalListCustorm';
import { useSelector, useDispatch  } from 'react-redux';

import { getOverview } from '../../../services/apis/overview';
import { fetchDetailsOverView, fetchOverView } from '../../../reducers/overViewSlice';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const style = (borderColor) => {
  return {
    padding: '8px 0',
    background: 'rgb(255, 255, 255)',
    boxShadow: 'rgba(21, 67, 152, 0.1) 0px 0px 30px',
    borderRadius: '10px',
    width: '100%',
    height: '150px',
    borderTop: `6px solid ${borderColor}`,
  }
};

const items = [
  {
    key: '1',
    label: (
      <a>
        Hôm nay
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a>
        Hôm qua
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a>
        Trong 7 ngày qua
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a>
        Trong 30 ngày qua
      </a>
    ),
  },
];

const columns1 = [
  {
    title: 'STT',
    dataIndex: 'stt'
  },
  {
    title: 'Mã khách hàng',
    dataIndex: 'codeRequest'
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'personRequest'
  },
  {
    title: 'Email / Số điện thoại',
    dataIndex: 'address'
  },
  {
    title: 'Địa chỉ dùng nước',
    dataIndex: 'reason'
  },
];

//data y/c số khach hang
const data1 = [];
for (let i = 0; i < 4; i++) {
  data1.push({
    key: i,
    stt: i,
    codeRequest: `0000${i}`,
    personRequest: `Person ${i}`,
    address: `09123xxx ${i}`,
    reason: `Adress ${i}`,
  });
}

//data y/c ho tro
const columns2 = [
  {
    title: 'STT',
    dataIndex: 'stt'
  },
  {
    title: 'Tiêu đề',
    dataIndex: 'codeRequest'
  },
  {
    title: 'Người yêu cầu',
    dataIndex: 'personRequest'
  },
  {
    title: 'Email / Số điện thoại',
    dataIndex: 'address'
  },
  {
    title: 'Nội dung',
    dataIndex: 'reason'
  },
  {
    title: 'Ngày yêu cầu',
    dataIndex: 'date'
  },
  {
    title: 'Ghi chú',
    dataIndex: 'note'
  },
];

const data2 = [];
for (let i = 0; i < 4; i++) {
  data2.push({
    key: i,
    stt: i,
    codeRequest: `0000${i}`,
    personRequest: `Person ${i}`,
    address: `09123xxx ${i}`,
    reason: `Adress ${i}`,
    date: `date${1}`,
    note: `note${1}`,
  });
}

const Genaral = () => {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalColumns, setModalColumns] = useState([]);
  const [modalDataSource, setModalDataSource] = useState([]);
  const [modalTitle, setModalTitle] = useState('');

  const [dataOverView, setdataOverView] = useState("")

  const dispatch = useDispatch();


  const overView = useSelector((state)=> state?.overView?.overViewGet?.overViewGet?.Object);

  //gui resquest body api
  useEffect(() => {
    dispatch(fetchOverView({ 
        FromDate: "2023-07-14T03:15:41.279Z", 
        ToDate: "2023-07-14T03:15:41.279Z" 
    }));
  }, []);

  // useEffect(() => {
  //   setdataOverView(overView);
  // }, [overView])

  console.log('dataOverView', overView);


  const showModal1 = (title) => {
    setModalTitle(title)
    setModalVisible1(true);
  };

  const showModal2 = (title,columns, dataSource) => {
    setModalTitle(title)
    setModalColumns(columns);
    setModalDataSource(dataSource);
    setModalVisible2(true);
  };

  const handleOk = () => {
    setModalVisible1(false);
    setModalVisible2(false);
  };

  const handleCancel = () => {
    setModalVisible1(false);
    setModalVisible2(false);
  };


  return (
    <Wapper>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
        arrow
      >
        <Button 
          style={{width: '500px', marginTop: '30px'
          , display: 'flex', justifyContent: 'space-between'
        }}
        >
          <span>Khung thời gian</span>
          <CalendarOutlined style={{marginTop: '4px'}}/>
        </Button>
      </Dropdown>
      
      <Divider />

      <Card
          title="Thông báo"
          bordered={false}
          style={{
            width: '100%',
            justifyContent: 'left'
          }}
      >
          <>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col className="gutter-row" span={8}
            onClick={() =>showModal1('Danh sách hóa đơn chưa thanh toán')}
          >
            <div style={style('red')}>
              <Row>
                <Col span={16} style={{marginTop: '14px'}}>
                  <Row >
                    <div style={{display: 'flex'}}>
                      <Dots style={{marginLeft: '20px', marginTop: '8px'}}/>
                      <span style={{marginLeft: '10px', fontWeight: 600, fontSize: '14px', }}> SỐ HÓA ĐƠN CHƯA THANH TOÁN</span>  
                    </div>
                  </Row>
                  <Row>
                    <span style={{margin: '20px 50px', fontWeight: 600, fontSize: '30px', color: '#154398'}}>12</span>
                  </Row>
                </Col>
                <Col span={8} style={{display: 'flex', alignItems: 'center'}}>
                  <img src={img1}/>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="gutter-row" span={8}
            onClick={() =>showModal2('Danh sách khách hàng',columns1,data2)}
          >
            <div style={style('#154398')}><Row>
                <Col span={16} style={{marginTop: '14px'}}>
                  <Row >
                    <div style={{display: 'flex'}}>
                      <Dots style={{marginLeft: '20px', marginTop: '8px'}}/>
                      <span style={{marginLeft: '10px', fontWeight: 600, fontSize: '14px', }}> SỐ KHÁCH HÀNG MỚI</span>  
                    </div>
                  </Row>
                  <Row>
                    <span style={{margin: '20px 50px', fontWeight: 600, fontSize: '30px', color: '#154398'}}>12</span>
                  </Row>
                </Col>
                <Col span={8} style={{display: 'flex', alignItems: 'center'}}>
                  <img src={img2}/>
                </Col>
              </Row></div>
          </Col>
          <Col className="gutter-row" span={8}
            onClick={() =>showModal2('Danh sách khách hàng',columns1,data2)}
          >
            <div style={style('#F88C00')}><Row>
                <Col span={16} style={{marginTop: '14px'}}>
                  <Row >
                    <div style={{display: 'flex'}}>
                      <Dots style={{marginLeft: '20px', marginTop: '8px'}}/>
                      <span style={{marginLeft: '10px', fontWeight: 600, fontSize: '14px', }}> SỐ KHÁCH HÀNG ĐANG QUẢN LÝ</span>  
                    </div>
                  </Row>
                  <Row>
                    <span style={{margin: '20px 50px', fontWeight: 600, fontSize: '30px', color: '#154398'}}>12</span>
                  </Row>
                </Col>
                <Col span={8} style={{display: 'flex', alignItems: 'center'}}>
                  <img src={img3}/>
                </Col>
              </Row></div>
          </Col>
          
        </Row>

        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
          style={{marginTop: '40px'}}
        >
          <Col className="gutter-row" span={8}>
            <div style={style('#00C590')}>
              <Row>
                <Col span={16} style={{marginTop: '14px'}}>
                  <Row >
                    <div style={{display: 'flex'}}>
                      <Dots style={{marginLeft: '20px', marginTop: '8px'}}/>
                      <span style={{marginLeft: '10px', fontWeight: 600, fontSize: '14px', }}> SỐ HÓA ĐƠN CHƯA THANH TOÁN</span>  
                    </div>
                  </Row>
                  <Row>
                    <span style={{margin: '20px 50px', fontWeight: 600, fontSize: '30px', color: '#154398'}}>12</span>
                  </Row>
                </Col>
                <Col span={8} style={{display: 'flex', alignItems: 'center'}}>
                  <img src={img4}/>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="gutter-row" span={8}
            onClick={() =>showModal2('Yêu cầu hỗ trợ',columns2,data2)}
          >
            <div style={style('#F88C00')}><Row>
                <Col span={16} style={{marginTop: '14px'}}>
                  <Row >
                    <div style={{display: 'flex'}}>
                      <Dots style={{marginLeft: '20px', marginTop: '8px'}}/>
                      <span style={{marginLeft: '10px', fontWeight: 600, fontSize: '14px', }}> YÊU CẦU HỖ TRỢ</span>  
                    </div>
                  </Row>
                  <Row>
                    <span style={{margin: '20px 50px', fontWeight: 600, fontSize: '30px', color: '#154398'}}>12</span>
                  </Row>
                </Col>
                <Col span={8} style={{display: 'flex', alignItems: 'center'}}>
                  <img src={img5}/>
                </Col>
              </Row></div>
          </Col>
          <Col className="gutter-row" span={8}
            onClick={() =>showModal2('Danh sách khách hàng',columns1,data2)}
          >
            <div style={style('#ED1117')}><Row>
                <Col span={16} style={{marginTop: '14px'}}>
                  <Row >
                    <div style={{display: 'flex'}}>
                      <Dots style={{marginLeft: '20px', marginTop: '8px'}}/>
                      <span style={{marginLeft: '10px', fontWeight: 600, fontSize: '14px', }}> SỐ KHÁCH HÀNG NGỪNG DỊCH VỤ SỬ DỤNG NƯỚC</span>  
                    </div>
                  </Row>
                  <Row>
                    <span style={{margin: '20px 50px', fontWeight: 600, fontSize: '30px', color: '#154398'}}>12</span>
                  </Row>
                </Col>
                <Col span={8} style={{display: 'flex', alignItems: 'center'}}>
                  <img src={img6}/>
                </Col>
              </Row></div>
          </Col>
          
        </Row>
          </>
      </Card>
    
      <Modals 
        title={modalTitle}
        visible={modalVisible1}
        onOk={handleOk}
        onCancel={handleCancel}
      />

      <ModalListCustorm
        title={modalTitle}
        visible={modalVisible2}
        onOk={handleOk}
        onCancel={handleCancel}
        columns={modalColumns}
        dataSource={modalDataSource}
      />
    </Wapper>
  )
}

export default Genaral