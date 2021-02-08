import styled from '@emotion/styled';

export const StyledSlide = styled.div<{isCurrent: boolean}>`
    width: 100%;
    height: inherit;
    position: absolute;
    transition: all 0.6s ease;
    opacity: ${props=> props.isCurrent? '1': '0'};
`;

export const StyledImg = styled.img`
    width: inherit;
    max-height: inherit;
    height: auto;
    display: block;
`;

export const TextBlock = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    text-align: center;
    top: 30%;
    width: 50%;
    height: 60%;
    background: ${props=> props.theme.background.body.overPic};
    opacity: 0.5;

    color: ${props=> props.theme.color.body.text.overPic};
    font-size: 2em;

    span:before{
        content: '';
        width: 80%;
        height: 1px;
        position: absolute;
        bottom: 50%;
        left: 0;
        background: ${props=> props.theme.background.header.elements};
        transition: all 0.5s;
    };
`;