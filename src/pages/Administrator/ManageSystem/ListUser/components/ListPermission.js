import CustomButton from '../../../../../components/Button/ButtonPrimary';
import CustomTable from '../../../../../components/Table';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
function ListPermission() {
    const dataSource = [
        {
            key: '1',
            positions: 'Giám đốc',
            note: 'Phó giám đốc'
        },
        {
            key: '2',
            positions: 'Giám đốc',
            note: 'Phó giám đốc'
        },
        {
            key: '3',
            positions: 'Trưởng phòng',
            note: 'Phó giám đốc'
        }
    ];

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
            dataIndex: 'positions'
        },
        {
            title: 'Ghi chú',
            dataIndex: 'note',
            width: 300
        }
    ];

    return (
        <div>
            <>
                <CustomTable
                    columns={columns}
                    dataSource={dataSource}
                    // onRow={(record, rowIndex) => {
                    //     return {
                    //         onMouseEnter: () => {
                    //             setHoveredRow(record.key);
                    //         }, // mouse enter row
                    //         onMouseLeave: () => {
                    //             setHoveredRow(null);
                    //         } // mouse leave row
                    //     };
                    // }}
                    bordered
                />
            </>
        </div>
    );
}

export default ListPermission;
