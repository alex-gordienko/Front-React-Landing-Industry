import React, { useState } from 'react';

import {
    StyledSlider,
    SliderWrapper,
    SliderControlLeft,
    SliderControlRight,
    SliderDotsBlock,
    SliderDot
} from './Slider.styled';

import Slide from './Slide';

interface ISliderProps {
    slides:{
        img: string;
        label: string;
    }[];
    options?:{
        scrollType?:'consistantly'|'dots';
        diffTextSides?: boolean;
    }
}

const Slider = ({slides, options}:ISliderProps)=>{
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

    const SlideScroller = (scrollType?:'consistantly'|'dots')=>{

        return scrollType=='consistantly'?(
            <div>
                <SliderControlLeft href='#' role='button' onClick={()=>SlideShow('left')}>
                <div className='arrow'></div>
                </SliderControlLeft>
                <SliderControlRight href='#' role='button' onClick={()=>SlideShow('right')}>
                    <div className='arrow'></div>
                </SliderControlRight>
            </div>
        ): scrollType=='dots'?(
            <SliderDotsBlock>
                {slides.map((slide, index)=>{
                    return <SliderDot 
                        isCurrent={index===currentPic? true: false} 
                        onClick={()=>setCurrentPic(index)}
                    />
                })}
            </SliderDotsBlock>
        ): null
    }

    return(
        <StyledSlider>
            <SliderWrapper>
                {slides.map((slide, indx)=>{
                    return <Slide 
                    isCurrent={indx===currentPic? true: false} 
                    slide={slide}
                    isRightTextSide={indx%2!==0? true: false}
                />
                })}
            </SliderWrapper>
                {SlideScroller(options?.scrollType)}
        </StyledSlider>
    )
};

export default Slider