import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledContainer = styled.div`
    display: inline-block;
`;

export const StyledLabel = styled.div`
    margin: 10px auto;
    font-size: 2em;
    width: max-content;
    
    &:after{
        content: '';
        display: block;
        margin: 5px auto;
        width: 70%;
        height: 2px;
        border: none;
        border-radius: 2px;
        background: ${props=> props.theme.color.body.styledElements};
        transition: all 0.5s;
    };
`;


export const PictureBlock = styled.div`
    display: inline-flex;
    flex-flow: wrap;
    margin: auto 50px;
`;

const TilesPhotoes = css`
    width: calc(100%/3 - 10px);
    min-width: 400px;
    height: 35vh;

    img{
        width: 100%;
        height: 100%;
    };

    .text-box{
        width: 80%;
        height: 25%;
        position: absolute;
        z-index: 10;
        top: 15%;
        left: 0;
        margin: 0;

        p{
            margin: auto 0px auto 20px;
        }
    }
`;

const FullWidthPhotoes = css`
    width: calc(100% - 10px);
    min-width: 400px;
    height: 50vh;


    img{
        width: 100%;
        height: auto;
        position: relative;
    };

    .text-box{
        width: 80%;
        height: 25%;
        position: absolute;
        z-index: 10;
        top: 15%;
        left: 0;
        margin: 0;

        p{
            margin: auto 0px auto 20px;
        }
    }
`;

export const Picture = styled.div<{displayType:'Tiles'| 'Full-Width'}>`
    transition: all 0.6s ease;
    display: block;
    flex-flow: wrap;
    
    min-height: 250px;
    position: relative;
    overflow: hidden;
    margin: 10px auto;

    .text-box{
        vertical-align: center;
        display: flex;
        background: ${props=> props.theme.background.body.overPic};
        color: ${props=> props.theme.color.body.text.overPic};
        font-size: 3vh;
        
        &:after{
            content: '';
            display: block;
            margin: 0px 5% 0px auto;
            width: 2px;
            height: 75%;
            border: none;
            border-radius: 2px;
            background: ${props=> props.theme.color.body.styledElements};
            transition: all 0.5s;
        }
    }

    ${props=> props.displayType==='Tiles'? TilesPhotoes: FullWidthPhotoes}
`