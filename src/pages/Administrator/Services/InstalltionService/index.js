import React from 'react'

import SearchComponent from '../components/SearchComponent'
import { Button, Divider, Tabs } from 'antd'
import { TabStyled } from './styles';
import TableContent from '../components/TableContent';
import TabPane from 'antd/es/tabs/TabPane';
import ListButton from '../components/ListButton';


const InstalltionService = () => {
    const items = [
        {
            key: '1',
            label: `Yêu cầu lắp đặt`,
            children: <TableContent type='1' />,
        },
        {
            key: '2',
            label: `Yêu cầu di chuyển`,
            children: <TableContent type='2' />,
        },

    ];
    return (
        <>
            <SearchComponent />
            <Divider />
            <TabStyled defaultActiveKey="1" items={items} tabBarExtraContent={<ListButton />}>
                
            </TabStyled>
        </>
    )
}

export default InstalltionService