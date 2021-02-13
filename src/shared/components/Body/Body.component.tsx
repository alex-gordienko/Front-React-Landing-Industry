import React from 'react';

import {
    StyledBody
} from './Body.styled';

import {constant} from './Slider.constants';
import {ContentConstant} from './Content.constants'

import Slider from './Slider';
import ContentContainer from './ContentContainer';

const Body = () => {


    return(
        <StyledBody>
            <Slider slides={constant} options={{scrollType:'dots'}}/>
            <ContentContainer displayType='Tiles' title='Услуги' data={ContentConstant}/>
            <ContentContainer displayType='Full-Width' title='Наша компания' data={ContentConstant}/>
        </StyledBody>
    )
};

export default Body;