import React, {useContext} from 'react';
import LanguageContext, {ILanguage} from '../../language/language';

import {
    HeaderContainer,
    HeaderCenterBlock,
    CenterMenuElement,
    HeaderLeftBlock,
    HeaderRightBlock
} from './Header.styled';


const Header = ()=>{
    const language = useContext<ILanguage>(LanguageContext);

    return(
        <HeaderContainer>
            <HeaderLeftBlock>
                Here is a Pic
            </HeaderLeftBlock>
            <HeaderCenterBlock>
                <CenterMenuElement><p>{language.header.menu.main}</p></CenterMenuElement>
                <CenterMenuElement><p>{language.header.menu.service}</p></CenterMenuElement>
                <CenterMenuElement><p>{language.header.menu.products}</p></CenterMenuElement>
                <CenterMenuElement><p>{language.header.menu.about}</p></CenterMenuElement>
                <CenterMenuElement><p>{language.header.menu.contacts}</p></CenterMenuElement>
            </HeaderCenterBlock>
            <HeaderRightBlock>
                Here is search
            </HeaderRightBlock>
        </HeaderContainer>
    )
}

export default Header
