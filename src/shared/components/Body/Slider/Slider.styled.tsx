import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledSlider = styled.div`
    width: 100%;
    height: 80vh;
    position: relative;
    overflow: hidden;
`;

export const SliderWrapper = styled.div`
    display: flex;
    transition: all 0.6s ease;
    width: 100%;
    height: 70vh;
`;

const sliderControl = css`
    position: absolute;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    color: #fff;
    text-align: center;
    opacity: 0.5;
    height: 50px;
    transform: translateY(-50%);
    background: rgba(0,0,0, 0.5);
`;

export const SliderControlLeft = styled.a`
    ${sliderControl};
    left: 0;
    
    .arrow{
        width: 15px;
        height: 15px;
        border-top: 5px solid ${props => props.theme.color.header.text.default};
        border-right: 5px solid ${props => props.theme.color.header.text.default};
        transform: rotate(-135deg);
    };

    :hover{
        .arrow{
            border-top: 5px solid ${props => props.theme.color.header.text.hover};
            border-right: 5px solid ${props => props.theme.color.header.text.hover};
        }
    }
`;

export const SliderControlRight = styled.a`
    ${sliderControl};
    right: 0;

    .arrow{
        width: 15px;
        height: 15px;
        border-top: 5px solid ${props => props.theme.color.body.styledElements};
        border-right: 5px solid ${props => props.theme.color.body.styledElements};
        transform: rotate(45deg);
    };

    :hover{
        .arrow{
            border-top: 5px solid ${props => props.theme.color.body.text.overPic};
            border-right: 5px solid ${props => props.theme.color.body.text.overPic};
        }
    }
`;

export const SliderDotsBlock = styled.div`
    display: flex;
    margin: auto auto 0px auto;
    width: min-content;
    color: #fff;
    opacity: 0.8;
`;

export const SliderDot = styled.span<{isCurrent: boolean}>`
    display: inline-flex;
    margin: 3px;
    background: ${props=> props.isCurrent ? props.theme.color.body.styledElements : props.theme.color.body.text.overPic};
    width: 10px;
    height: 10px;
    border-radius: 5px;
`;