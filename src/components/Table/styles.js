import styled, { css } from 'styled-components';
import { colors, customTitle } from '../../styles';
import { Table } from 'antd';

export const TableStyled = styled(Table)`
    .ant-table-thead {
        .ant-table-cell {
            background: ${colors.primary};
            text-align: center;
            color: ${colors.white};
            &:hover {
                background: ${colors.primary} !important;
                &::before {
                    background-color: #f0f0f0 !important;
                }
            }
        }
    }
`;
