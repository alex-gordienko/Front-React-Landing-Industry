import React from 'react';

import {
    StyledContainer
} from './ContentContainer.styled';

interface IContentContainerProps{
    displayType: 'Tiles'| 'Full-Width';
    title: string;
    data:{
        img: string;
        label: string;
    }
}

const ContentContainer = ({displayType}: IContentContainerProps) =>{

    return(
        <StyledContainer>

        </StyledContainer>
    )
};

export default ContentContainer;