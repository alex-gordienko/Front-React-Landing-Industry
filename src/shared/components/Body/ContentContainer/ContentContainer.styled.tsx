import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledContainer = styled.div`
    display: grid;
    width: 100%;
    height: auto;
`;

export const StyledLabel = styled.div`
    margin: 10px auto;
    color: ${props=> props.theme.color.body.text.default};
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


export const PictureBlock = styled.div<{displayType:'Tiles'| 'Full-Width'}>`
    display: inline-flex;
    flex-flow: wrap;
    margin: ${props => props.displayType==='Full-Width'? '0': 'auto 50px'};
`;

const TilesPhotoes = css`
    width: calc(100%/3 - 10px);
    min-width: 400px;
    height: 35vh;
    margin: 10px auto;

    img{
        width: 100%;
        height: 100%;
    };

    .text-box{
        width: 80%;
        height: 25%;

        .label{
            font-size: 3vh;
            margin: auto 0px auto 20px;
        }
    }
`;

const FullWidthPhotoes = css`
    width: 100%;
    min-width: 400px;
    height: 60vh;
    margin: 10px 0px;

    img{
        width: 100%;
        height: auto;
        position: relative;
    };

    .text-box{
        display: inline-block;
        width: 50%;
        height: auto;

        .label{
            font-size: 5vh;
            margin: 20px 0px auto 80px;
        }
        .text{
            width: 70%;
            font-size: 3vh;
            margin: 30px 0px 30px 80px;
        }
    }
`;

export const Picture = styled.div<{displayType:'Tiles'| 'Full-Width'; isRightSide?:boolean}>`
    transition: all 0.6s ease;
    display: block;
    flex-flow: wrap;
    
    min-height: 250px;
    position: relative;
    overflow: hidden;

    .text-box{
        vertical-align: center;
        display: flex;
        background: ${props=> props.theme.background.body.overPic};
        color: ${props=> props.theme.color.body.text.overPic};
        top: 15%;
        ${props=> props.isRightSide && props.displayType=='Full-Width'? 'right:0':'left: 0'};
        margin: 0;
        position: absolute;
        z-index: 10;

        &:after{
            content: '';
            position: absolute;
            ${props=> props.isRightSide && props.displayType=='Full-Width' ? 'left:0':'right: 0'};
            top:0;
            margin: ${props=> props.isRightSide && props.displayType=='Full-Width'? '0px auto 0px 5%':'0px 5% 0px auto'};
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