import { css } from '@emotion/react';
import styled from '@emotion/styled';


const hiddenSearch = css`
    display: none;
`;

const activeSearch = css`
    height: min-content;
`;

export const LangSelectedBlock = styled.div`
    width: 50px;
    height: 30px;
    margin: auto 0px 10px 0px;
    display: inline-block;
    position: relative;
    img{
        width: 20px;
        margin: 5px auto;
        display: block;
        height: auto;
    };
`;

export const StyledLangBlock = styled.ul<{active:boolean}>`
    list-style-type: none;
    width: 50px;
    position: absolute;
    top: 15px;
    background: ${props=> props.theme.background.header.subcontainer};
    padding: 0;
    display: block;

    ${props=> props.active? activeSearch:hiddenSearch};
`;

