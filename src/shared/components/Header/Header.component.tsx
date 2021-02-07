import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import LanguageContext, {ILanguage} from '../../language/language';

import {
    HeaderContainer,
    HeaderCenterBlock,
    HeaderLeftBlock,
    HeaderRightBlock
} from './Header.styled';

import Search from './Search';
import LanguageSelector from './LanguageSelector';

interface IHeaderProps{
    selectedLang: number;
    onLangSelect: (value: number)=> void;
}

const Header = ({ selectedLang, onLangSelect}:IHeaderProps)=>{
    const language = useContext<ILanguage>(LanguageContext);

    return(
        <HeaderContainer>
            <HeaderLeftBlock>
                Here is a Pic
            </HeaderLeftBlock>
            <HeaderCenterBlock>
                    <NavLink exact={true} to='/' className='link' activeClassName='link--active'>
                        {language.header.menu.main}
                    </NavLink>
                    <NavLink to='/service' className='link' activeClassName='link--active'>
                        {language.header.menu.service}
                    </NavLink>
                    <NavLink to='/products' className='link' activeClassName='link--active'>
                        {language.header.menu.products}
                    </NavLink>
                    <NavLink to='/about' className='link' activeClassName='link--active'>
                        {language.header.menu.about}
                    </NavLink>
                    <NavLink to='/contacts' className='link' activeClassName='link--active'>
                        {language.header.menu.contacts}
                    </NavLink>
            </HeaderCenterBlock>
            <HeaderRightBlock>
                <Search/>
                <LanguageSelector selectedLang={selectedLang} onLangSelect={onLangSelect}/>
            </HeaderRightBlock>
        </HeaderContainer>
    )
}

export default Header
