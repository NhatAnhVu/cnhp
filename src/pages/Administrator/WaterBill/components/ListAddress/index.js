import React, { useState } from 'react'
import { Wrapper } from './styles'
import { StyledTree } from './styles'
import { Button, Tree } from 'antd';
import ActionSidebar from '../ActionSidebar';
const treeData = [
    {
        title: 'Hải Phòng',
        key: 'hai-phong',
        children: [
            {
                title: 'Quận Hồng Bàng',
                key: 'quan-hong-bang',
                children: [
                    {
                        title: 'Phường Hạ Lý',
                        key: 'phuong-ha-ly',

                    },
                    {
                        title: 'Phường Hoàng Văn Thái',
                        key: 'phuong-hoang-van-thai',
                    },
                ],
            },
            {
                title: 'Quận Ngô Quyền',
                key: 'quan-ngo-quyen',
                children: [
                    {
                        title: 'Phường Cầu Đất',
                        key: 'phuong-cau-dat',
                        children: [
                            {
                                title: 'Thôn 1',
                                key: 'thon-1'
                            },
                            {
                                title: 'Thôn 2',
                                key: 'thon-2'
                            },
                        ]
                    },
                    {
                        title: 'Phường Hạ Đình',
                        key: 'phuong-ha-dinh',
                    },
                ],
            },
        ],
    },
];
const ListAddress = () => {
    const handleSelect = (selectedKeys, info) => {
        console.log('Selected Keys:', selectedKeys.node.pos);
        console.log('Info:', info.node.pos);
        // Add your custom logic here based on the selectedKeys or info
    };
    const [hoveredLevel, setHoveredLevel] = useState();
    const [showButton, setShowButton] = useState(false);

    const handleMouseEnter = (selectedKeys, info) => {
        const str = selectedKeys.node.pos;
        const level = str.split("-").length;
        console.log("cái này level: ", level - 1);
        console.log(selectedKeys);
        setHoveredLevel(level - 1)
    };

    const handleMouseLeave = () => {
        setHoveredLevel('');
        console.log('Hovered Level: None');
    };

    const titleRender = (nodeProps) => {
        const { title, pos, key, isLeaf } = nodeProps;

        if (hoveredLevel === 3 && !isLeaf) {
            return (
                <div className="ant-tree-title">
                    <div>{title}</div>
                    <ActionSidebar className='hover' lessAction />
                </div>
            );
        }
        else if (hoveredLevel === 4 && !isLeaf) {
            return (
                <div className="ant-tree-title">
                    <div>{title}</div>
                    <ActionSidebar className='hover' fullAction />
                </div>
            );
        } else {
            return (
                <div className="ant-tree-title">
                    <div>{title}</div>

                </div>
            );
        }
        return title;
    }
    return (
        <Wrapper>
            <StyledTree
                defaultExpandAll
                treeData={treeData}
                //onSelect={handleSelect}
                // titleRender={titleRender}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                titleRender={titleRender}
            />
        </Wrapper>
    )
}

export default ListAddress