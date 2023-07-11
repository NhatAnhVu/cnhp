import React from 'react'
import { Body, Header, PeopleCare, TagItem, TagPopular, Wrapper } from './styles'
import { Col, Divider, List, Row, Typography } from 'antd'
import { TitleStyled, themeStyles } from '../GlobalStyles'
import { Link } from 'react-router-dom'

const { Title } = Typography
const listPosts = [
    {
        title: 'Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của thành phố',
        datetime: '10/10/2022 08:08:08'
    },
    {
        title: 'Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của thành phố',
        datetime: '10/10/2022 08:08:08'
    },
]

const listTags = [
    'Hoạt động sản xuất',
    'Đảng và đoàn thể',
    'Tiết kiệm',
    'Tin tức liên quan'
]
const PostCategory = ({ tags }) => {
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
                        dataSource={listPosts}
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
                        {listTags.map((tag, index) => (
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