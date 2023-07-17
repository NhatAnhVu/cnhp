import CustomButton from '../../../../components/Button/ButtonPrimary';
import { Row, Col, Input, Divider } from 'antd';
import { colors } from '../../../../styles';
import ListPermission from './components/ListPermission';
function ListUser() {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    return (
        <div>
            <div className="form-search">
                <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                <Divider />
            </div>
            <div className="head-group">
                <div className="title">Phòng ban - Chức danh</div>
                <div>
                    <CustomButton backgroundColor={colors.primary}>Thêm nhóm quyền</CustomButton>
                </div>
            </div>
            <Divider />
            <ListPermission />
        </div>
    );
}

export default ListUser;
