import React from 'react'
import { Line, Title } from './styles'

const TitleComponent = ({title}) => {
    return (
        <Title>
            {title}
            <Line />
        </Title>
    )
}

export default TitleComponent