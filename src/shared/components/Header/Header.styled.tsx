import styled from '@emotion/styled';


export const HeaderContainer = styled.header`
    width: 100%;
    min-width: max-content;
    height: 80px;
    background: ${props=> props.theme.background.header.container};
    display: inline-flex;
`;

export const HeaderLeftBlock = styled.div`
    margin-left: 50px;
    background: ${props=> props.theme.background.header.subcontainer};
    height: 100%;
`;

export const HeaderCenterBlock = styled.div`
    width: 40%;
    min-width: max-content;
    margin-left: auto;
    display: inline-flex;
    background: ${props=> props.theme.background.header.subcontainer};
    height: 100%;

    .link{
        text-decoration: none;
        position: relative;
        transition: all 1s;
        min-width: max-content;
        width: inherit;
        margin-right: 1px;
        color: ${props=> props.theme.color.header.text.default};
        background: ${props=> props.theme.background.header.elements};
        text-align: center;
        padding: 40px 2px 2px 2px;

        &:before{
            content: '';
            width: 0;
            height: 1px;
            position: absolute;
            bottom: 0;
            left: 0;
            background: ${props=> props.theme.background.header.elements};
            transition: all 0.5s;
        };
        &:hover{
            color: ${props=> props.theme.color.header.text.hover};
                &:before{
                    width: 100%;
                    left:0;
                    background: ${props=> props.theme.color.header.text.hover};
                }
        }
        &:last-child{
            margin-right:0;
        }
    };
    
    .link--active{
        color: ${props=> props.theme.color.header.text.active};
            &:before{
                width: 100%;
                left:0;
                background: ${props=> props.theme.color.header.text.active};
            }
    };
`;

export const HeaderRightBlock = styled.div`
    height: 100%;
    width: max-content;
    min-width: max-content;
    margin: 0px auto 10px 30px;
    position: relative;
`;