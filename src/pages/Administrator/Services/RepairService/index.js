import React from 'react'
import SearchComponent from '../components/SearchComponent'
import { Divider } from 'antd'
import TitleComponent from '../../../../components/TitleComponent'
import ListButton from '../components/ListButton'
import TableContent from '../components/TableContent'

const RepairService = () => {
    return (
        <>
            <SearchComponent />
            <Divider />
            <TitleComponent title={'Sửa chữa (đồng hồ, mạng lưới cấp nước sau đồng hồ)'}>
                <ListButton />
            </TitleComponent>
            <TableContent type='2' />
        </>
    )
}

export default RepairService