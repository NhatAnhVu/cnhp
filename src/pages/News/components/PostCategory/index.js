import React, { useEffect, useState } from 'react'
import { Body, Header, PeopleCare, TagItem, TagPopular, Wrapper } from './styles'
import { Col, Divider, List, Row, Typography } from 'antd'
import { TitleStyled, themeStyles } from '../GlobalStyles'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const { Title } = Typography

const listTagPost = [
    'Hoạt động sản xuất',
    'Đảng và đoàn thể',
    'Tiết kiệm',
    'Tin tức liên quan'
]
const listTagQuality = [
    'Các thủ tục khách hàng cần biết',
    'Giá nước - Định mức',
    'Thông tin khách hàng cần biết',
    'Chính sách chung',
    'Chính sách bảo mật'
]

const listPostQuality = [
    {
        title: 'Quy định về di chuyển máy nước / Nâng hạ cỡ đồng hồ nước',
        datetime: '10/10/2022 08:08:08'
    },
    {
        title: 'Danh ba tổ quản lý và kinh doanh nước máy',
        datetime: '10/10/2022 08:08:08'
    },
    {
        title: 'Thông báo cấp nước không ổn định khu vực phường Bàng La - quận Đồ Sơn',
        datetime: '10/10/2022 08:08:08'
    },
]

const listPostNews = [
    {
        title: 'Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của thành phố',
        datetime: '10/10/2022 08:08:08'
    },
    {
        title: 'Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của thành phố',
        datetime: '10/10/2022 08:08:08'
    },
]
const PostCategory = () => {
    const [listTag, setListTag] = useState([])
    const [listPostCategory, setListPostCategory] = useState([])

    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('tin-tuc')) {
            setListTag(listTagPost)
            setListPostCategory(listPostNews)
        }
        else if (location.pathname.includes('chat-luong-nuoc')) {
            setListTag(listTagQuality)
            setListPostCategory(listPostQuality)
        }
    })
    
    return (
        <Wrapper>
            <Header>
                <TitleStyled level={2} weight={700} color='white'> Danh mục bài viết</TitleStyled>
                <Divider className='divider' />
            </Header>
            <Body>
                <PeopleCare>
                    <TitleStyled weight={600} color='#000'>Nhiều người quan tâm</TitleStyled>
                    <List className='list-post'
                        dataSource={listPostCategory}
                        renderItem={(item) => (
                            <List.Item className='post-item'>
                                <Link to={'#'}><TitleStyled weight={600} size='14px'>{item.title}</TitleStyled></Link>
                                <p className='datetime'>{item.datetime}</p>
                            </List.Item>
                        )}
                    />
                </PeopleCare>
                <TagPopular>
                    <TitleStyled weight={600} color='#000'>Tag phổ biến</TitleStyled>
                    <Row className='list-tag'>
                        {listTag.map((tag, index) => (
                            <Link to={'#'}>
                                <Col className='tag-item' key={index}>
                                    {tag}
                                </Col>
                            </Link>


                        ))}

                    </Row>

                </TagPopular>
            </Body>
        </Wrapper>
    )
}

export default PostCategory