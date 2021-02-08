import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledSlide = styled.div<{isCurrent: boolean}>`
    width: 100%;
    height: inherit;
    position: absolute;
    transition: all 0.6s ease;
    opacity: ${props=> props.isCurrent? '1': '0'};
`;

export const StyledImg = styled.img`
    width: inherit;
    max-height: inherit;
    height: auto;
    display: block;
`;

const leftSide = css`
    align-items: left;
    justify-content: left;
    text-align: left;
    left: 0;
    span:before{
        left: 0;
    }
`;

const rightSide = css`
    align-items: right;
    justify-content: right;
    text-align: right;
    right:0;
    span:before{
        right: 0;
    }
`;


export const TextBlock = styled.div<{rightSide?:boolean}>`
    transition: all 0.6s ease;
    display: flex;
    position: absolute;
    top: 30%;
    width: 50%;
    height: 60%;
    background: ${props=> props.theme.background.body.overPic};

    ${props=> props.rightSide? rightSide: leftSide};
    p{
        width: 100%;
        margin: auto 50px;
        color: ${props=> props.theme.color.body.text.overPic};
        font-size: 2em;
    }

    span:before{
        content: '';
        width: 80%;
        height: 1px;
        position: absolute;
        bottom: 20%;
        background: ${props=> props.theme.background.header.elements};
        transition: all 0.5s;
    };
`;