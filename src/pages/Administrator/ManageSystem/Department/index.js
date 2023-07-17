import React from 'react';
import CustomButton from '../../../../components/Button/ButtonPrimary';
import { colors } from '../../../../styles';
import { Row, Col, Input, Divider } from 'antd';
import ListDepartment from './components/ListDepartment';
import ListPositions from './components/ListPositions';
import { DepartmentStyled } from './styles';
const Department = () => {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);

    return (
        <DepartmentStyled>
            <div className="form-search">
                <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                <Divider />
            </div>
            <div className="head-group">
                <div className="title">Phòng ban - Chức danh</div>
                <CustomButton backgroundColor={colors.primary}>Thêm chức danh</CustomButton>
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
        </DepartmentStyled>
    );
};

export default Department;
