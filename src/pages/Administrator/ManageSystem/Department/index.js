import React from 'react';
import CustomButton from '../../../../components/Button/ButtonPrimary';
import { colors } from '../../../../styles';
import { Row, Col, Input, Divider } from 'antd';
import ListDepartment from './components/ListDepartment';
import ListPositions from './components/ListPositions';
import { DepartmentStyled } from './styles';
import ModalAdd from './components/ModalAdd';
import { useState } from 'react';
import { fetchAddPosition, fetchPosition } from '../../../../reducers/positionSlice';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Department = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newValueName, setNewValueName] = useState('');
    const [newValueNote, setNewValueNote] = useState('');

    const dispatch = useDispatch();

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = () => {
        dispatch(
            fetchAddPosition({
                PositionName: newValueName,
                Level: 0,
                Note: newValueNote,
                DepartmentID: '0c741548-a6df-4089-bfd9-0831748ea3b1'
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
        console.log('FINISH');
    };
    console.log(newValueName, newValueNote);

    return (
        <DepartmentStyled>
            <div className="form-search">
                <Divider />
            </div>
            <div className="head-group">
                <div className="title">Phòng ban - Chức danh</div>
                <CustomButton
                    backgroundColor={colors.primary}
                    onClick={() => {
                        setIsModalOpen(true);
                    }}
                >
                    Thêm chức danh
                </CustomButton>
            </div>
            <Divider />

            <Row gutter={16}>
                <Col span={5}>
                    <ListDepartment />
                </Col>
                <Col span={19}>
                    <ListPositions />
                </Col>
            </Row>

            <ModalAdd
                openModalAdd={isModalOpen}
                onModalAddOk={handleOk}
                onModalAddCancel={handleCancel}
                closeModalAddClick={() => {
                    setIsModalOpen(false);
                }}
                onFormAddFinish={onFinish}
                onNameAddChange={(e) => {
                    setNewValueName(e.target.value);
                    console.log('TAP HERE', e.target.value);
                }}
                onNoteAddChange={(e) => {
                    setNewValueNote(e.target.value);
                    console.log('TAP NOTE HERE', e.target.value);
                }}
            />
        </DepartmentStyled>
    );
};

export default Department;
