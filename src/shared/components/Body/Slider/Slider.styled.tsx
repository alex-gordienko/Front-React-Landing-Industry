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
`;

export const SliderControlRight = styled.a`
    ${sliderControl};
    right: 0;
`