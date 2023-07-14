import { Table } from 'antd';
import { TableStyled } from './styles';

function CustomTable({ columns, dataSource, rowSelection }) {
    return <TableStyled columns={columns} dataSource={dataSource} rowSelection={rowSelection} />;
}

export default CustomTable;
