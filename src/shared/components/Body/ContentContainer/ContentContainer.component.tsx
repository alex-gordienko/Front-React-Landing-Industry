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
        text?: string;
    }[];
}

const ContentContainer = ({displayType, title, data}: IContentContainerProps) =>{

    return(
        <StyledContainer>
            <StyledLabel>
                {title}
            </StyledLabel>
            <PictureBlock displayType={displayType}>
                {data.map((picture, index)=>{
                    return (
                        <Picture displayType={displayType} isRightSide={index%2!=0}>
                            <img src={picture.img} alt={picture.label}/>
                            <div className='text-box'>
                                <p className='label'>{picture.label}</p>
                                {picture.text && 
                                    <p className='text'>{picture.text}</p>
                                }
                            </div>
                        </Picture>
                    )
                })}
            </PictureBlock>
        </StyledContainer>
    )
};

export default ContentContainer;