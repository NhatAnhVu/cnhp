import React, { useState } from 'react'
import { Card } from 'antd';
import { Button, Dropdown, Modal } from 'antd';
import {  CalendarOutlined } from '@ant-design/icons';
import { Col, Divider, Row } from 'antd';
import img1 from '../../../common/images/imageAdministrator_page/tongbaoicon1.svg'
import { Dots } from '../../../styles';
import { Wapper, WapperModal } from './style';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
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
        Hôm qua
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a>
        Hôm nay
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
];

const Genaral = () => {

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
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
            onClick={showModal}
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
          <Col className="gutter-row" span={8}>
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
                  <img src={img1}/>
                </Col>
              </Row></div>
          </Col>
          <Col className="gutter-row" span={8}>
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
                  <img src={img1}/>
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
                  <img src={img1}/>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
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
                  <img src={img1}/>
                </Col>
              </Row></div>
          </Col>
          <Col className="gutter-row" span={8}>
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
                  <img src={img1}/>
                </Col>
              </Row></div>
          </Col>
          
        </Row>
          </>
      </Card>
    
      <WapperModal title="Danh sách hóa đơn chưa thanh toán"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        >
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              // onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
          </Space>

          <Card
          title=""
          bordered={false}
          style={{
            width: '100%',
            justifyContent: 'left'
          }}
          >
              1 cái table
          </Card>
      </WapperModal>
    </Wapper>
  )
}

export default Genaral