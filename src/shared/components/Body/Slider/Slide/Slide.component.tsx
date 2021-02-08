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
    }
}

const Slide = ({isCurrent, slide}:ISlideProps)=>{

    return(
        <StyledSlide isCurrent={isCurrent}>
            <StyledImg src={slide.img} alt=''/>
            <TextBlock>
                {slide.label}
                <span></span>
            </TextBlock>
        </StyledSlide>
    )
}

export default Slide