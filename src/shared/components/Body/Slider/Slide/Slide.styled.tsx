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
    display: block;
    position: relative;
    top: 50%;
    left: 10%;
    width: 30%;
    height: 50%;
    background: rgba(0,0,0, 0.5);
`;