import { Tabs } from 'antd';
import React from 'react';
import SearchSerial from './components/SearchSerial';

const SuspendSchedule = () => {
    const items = [
        {
            key: '1',
            label: `Tab 1`,
            children: `Content of Tab Pane 1`
        },
        {
            key: '2',
            label: `Tab 2`,
            children: `Content of Tab Pane 2`
        },
        {
            key: '3',
            label: `Tab 3`,
            children: `Content of Tab Pane 3`
        }
    ];
    return (
        <div>
            <div className="title">Lịch tạm ngừng cấp nước</div>
            <Tabs />
            <SearchSerial />
        </div>
    );
};

export default SuspendSchedule;
