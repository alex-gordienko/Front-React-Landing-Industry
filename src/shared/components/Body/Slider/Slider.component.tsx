import React, { useState } from 'react';

import {
    StyledSlider,
    SliderWrapper,
    SliderControlLeft,
    SliderControlRight
} from './Slider.styled';

import Slide from './Slide';

interface ISliderProps {
    slides:{
        img: string;
        label: string;
    }[];
}

const Slider = ({slides}:ISliderProps)=>{
    const [currentPic, setCurrentPic] = useState(0);

    const SlideShow = (direction: 'left'|'right')=>{
        if(direction==='left'){
            if(currentPic===0) return setCurrentPic(slides.length-1);
            else return setCurrentPic(prev=>prev-1)
        }
        else if (direction==='right'){
            if(currentPic===slides.length-1) return setCurrentPic(0);
            else return setCurrentPic(prev=>prev+1);
        }
    };

    return(
        <StyledSlider>
            <SliderWrapper>
                {slides.map((slide, indx)=>{
                    return <Slide isCurrent={indx===currentPic? true: false} slide={slide}/>
                })}
            </SliderWrapper>
            <SliderControlLeft href='#' role='button' onClick={()=>SlideShow('left')}/>
            <SliderControlRight href='#' role='button' onClick={()=>SlideShow('right')}/>
        </StyledSlider>
    )
};

export default Slider