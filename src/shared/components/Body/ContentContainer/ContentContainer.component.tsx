import React from 'react';

import {
    StyledContainer,
    StyledLabel,
    PictureBlock,
    Picture
} from './ContentContainer.styled';

interface IContentContainerProps{
    displayType: 'Tiles'| 'Full-Width';
    title: string;
    data:{
        img: string;
        label: string;
    }[]
}

const ContentContainer = ({displayType, title, data}: IContentContainerProps) =>{

    return(
        <StyledContainer>
            <StyledLabel>
                {title}
            </StyledLabel>
            <PictureBlock>
                {data.map((picture, index)=>{
                    return (
                        <Picture displayType={displayType}>
                            <img src={picture.img} alt={picture.label}/>
                            <div className='text-box'><p>{picture.label}</p></div>
                        </Picture>
                    )
                })}
            </PictureBlock>
        </StyledContainer>
    )
};

export default ContentContainer;