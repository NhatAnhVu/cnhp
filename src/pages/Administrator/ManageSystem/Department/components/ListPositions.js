import CustomButton from '../../../../../components/Button/ButtonPrimary';
import CustomTable from '../../../../../components/Table';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import ModalAdd from './ModalAdd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosition } from '../../../../../reducers/positionSlice';
import { UpdateListPosition } from '../../../../../services/apis/positions';
const { confirm } = Modal;
function ListPositions() {
    const [dataListView, setdataListView] = useState([]);
    // const [hoveredRow, setHoveredRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataInfo, setDataInfo] = useState(undefined);
    const [newNameValue, setNewNameValue] = useState('');
    const [newNoteValue, setNewNoteValue] = useState('');
    const dispatch = useDispatch();

    const listView = useSelector((state) => state?.position?.positionGet?.Object?.data);

    useEffect(() => {
        setdataListView(listView);
    }, [listView]);
    useEffect(() => {
        dispatch(
            fetchPosition({
                TextSearch: '',
                PageSize: 20,
                CurrentPage: 1
            })
        );
    }, []);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleDataSubmit = (data) => {
        setdataListView((prev) => [...prev, data]);
    };

    const onFinish = (values) => {
        console.log('123123123213', values);
        dispatch(
            UpdateListPosition({
                PositionID: dataInfo.PositionID,
                PositionName: dataInfo.PositionName,
                Note: dataInfo.Note
            })
        ).then(() => {
            dispatch(
                fetchPosition({
                    TextSearch: '',
                    PageSize: 20,
                    CurrentPage: 1
                })
            );
        });
    };

    console.log('dataInfo', dataInfo);

    const handlePositionChange = (e) => {
        setNewNameValue(e.target.value);
        setDataInfo({
            ...dataInfo,
            PositionName: e.target.value
        });
        console.log(newNameValue);
    };

    const handleNoteChange = (e) => {
        setNewNoteValue(e.target.value);
        setDataInfo({
            ...dataInfo,
            Note: e.target.value
        });
    };

    const columns = [
        {
            title: 'Stt',
            dataIndex: 'stt',
            width: 70,
            className: 'serial',
            render: (value, record, index) => index + 1
        },
        {
            title: 'Tên chức danh',
            dataIndex: 'PositionName'
        },
        {
            title: 'Ghi chú',
            dataIndex: 'Note',
            key: 'note',
            width: 300,
            render: (value, record) => (
                <div className="action">
                    <div>{value}</div>

                    <>
                        <Row gutter={8} className="edit">
                            <Col span={12}>
                                <CustomButton
                                    className={'icon-edit icon'}
                                    onClick={() => {
                                        setIsModalOpen(true);
                                        setDataInfo(record);
                                        // console.log(record.PositionID);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPen} />
                                </CustomButton>
                            </Col>
                            <Col span={12}>
                                <CustomButton
                                    className={'icon-delete icon'}
                                    onClick={() => {
                                        // confirm({
                                        //     title: 'Are you sure delete this task?',
                                        //     icon: <ExclamationCircleFilled />,
                                        //     content: 'Some descriptions',
                                        //     okText: 'Yes',
                                        //     okType: 'danger',
                                        //     cancelText: 'No',
                                        //     onOk() {
                                        //         console.log('OK');
                                        //     },
                                        //     onCancel() {
                                        //         console.log('Cancel');
                                        //     }
                                        // });

                                        console.log(record);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </CustomButton>
                            </Col>
                        </Row>
                    </>
                </div>
            )
        }
    ];

    return (
        <>
            <CustomTable
                columns={columns}
                dataSource={dataListView}
                // onRow={(record, rowIndex) => {
                //     return {
                //         onMouseEnter: () => {
                //             setHoveredRow(record.PositionID);
                //         }, // mouse enter row
                //         onMouseLeave: () => {
                //             setHoveredRow(null);
                //         } // mouse leave row
                //     };
                // }}
                bordered
            />
            <ModalAdd
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                onDataSubmit={handleDataSubmit}
                dataInfo={dataInfo}
                onFinish={onFinish}
                onPositonChange={handlePositionChange}
                onNoteChange={handleNoteChange}
                closeModalClick={() => {
                    setIsModalOpen(false);
                }}
            />
        </>
    );
}

export default ListPositions;
