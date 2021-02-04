import styled from '@emotion/styled';


export const HeaderContainer = styled.header`
    width: 100%;
    min-width: max-content;
    height: 70px;
    background: ${props=> props.theme.headerBackground};
    display: inline-flex;
`;

export const HeaderLeftBlock = styled.div`
    margin-left: 50px;
    background: ${props=> props.theme.headerMenuDelim}
`;

export const HeaderCenterBlock = styled.div`
    width: 40%;
    min-width: max-content;
    margin: 0px auto;
    display: inline-flex;
    background: ${props=> props.theme.headerMenuDelim}
`;

export const CenterMenuElement = styled.div`
    min-width: max-content;
    width: inherit;
    height: 100%;
    margin: auto 1px;
    background: ${props=> props.theme.headerBackground};

    p{
        text-decoration: none;
        position: relative;
        transition: all 0.6s;
        width: max-content;
        margin: 30px auto 5px auto;

        &:before{
            content: '';
            width: 0;
            height: 1px;
            position: absolute;
            bottom: -5px;
            left: 0;
            background: blue;
            transition: all 0.3s;
        }
    }
    :hover{
        cursor: pointer;
        color: orange;
        box-shadow: inset -1px 0px 2px orange;
            p:before{
                width: 100%;
                left:0;
                background: orange;
            }
    }
`;

export const HeaderRightBlock = styled.div`
    margin-right: 50px;
    border: 1px solid blue;
`;