import React from 'react';

import {
    StyledBody
} from './Body.styled';

import {constant} from './Slider.constants';

import Slider from './Slider';

const Body = () => {


    return(
        <StyledBody>
            <Slider slides={constant}/>
        </StyledBody>
    )
};

export default Body;