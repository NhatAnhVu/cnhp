import { Button } from 'antd';
import styled, { css } from 'styled-components';
import { colors } from '../../styles';

function CustomButton({ children, backgroundColor, color, onClick }) {
    const ButtonPrimaryStyled = styled(Button)`
        border-radius: 4px;
        background: ${backgroundColor || 'linear-gradient(90deg, #154398 0%, #ed1117 100%)'};
        color: ${color || colors.white}};
        font-size: 16px;
        font-weight: 600;
    `;
    return <ButtonPrimaryStyled onClick={onClick}>{children}</ButtonPrimaryStyled>;
}

export default CustomButton;
