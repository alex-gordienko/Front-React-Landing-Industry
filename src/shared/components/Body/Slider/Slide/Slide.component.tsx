import React from 'react';

import {
    StyledSlide,
    StyledImg,
    TextBlock
} from './Slide.styled';

interface ISlideProps{
    isCurrent: boolean;
    slide:{
        img: string;
        label: string;
    };
    isRightTextSide?:boolean;
}

const Slide = ({isCurrent, slide, isRightTextSide}:ISlideProps)=>{

    return(
        <StyledSlide isCurrent={isCurrent}>
            <StyledImg src={slide.img} alt=''/>
            <TextBlock rightSide={isRightTextSide}>
                <p>{slide.label}</p>
                <span></span>
            </TextBlock>
        </StyledSlide>
    )
}

export default Slide