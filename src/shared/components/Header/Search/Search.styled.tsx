import { css } from '@emotion/react';
import styled from '@emotion/styled';


const hiddenSearch = css`
    left: 10px;
    bottom: 10px;
    width: 30px;
    height: 30px;
`;

const activeSearch = css`
    bottom: -32px;
    left: -25vh;
    width: 250px;
    height: 30px;
`;

export const StyledSearchBlock = styled.div<{active:boolean}>`
    position: absolute;
    transition: all 1s;
    display: flex;
    border: 1px solid ${props=> props.theme.color.header.border};
    
    .search-icon{
        margin: auto;
    }

    ${props=> props.active? activeSearch:hiddenSearch};
`;

export const StyledSearch = styled.input<{active:boolean}>`
    margin: 4px 10px 4px 10px;
    display: ${props=> props.active? 'inline-flex':'none'};
    border: none;
`;