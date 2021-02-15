import React, { useContext } from 'react';

import LanguageContext, {ILanguage} from '../../language/language';

import {
    StyledBody
} from './Body.styled';

import {Constant} from './Slider.constants';
import {TilesConstant, FullWidthConstant} from './Content.constants'

import Slider from './Slider';
import ContentContainer from './ContentContainer';

const Body = () => {

    const language = useContext<ILanguage>(LanguageContext);

    return(
        <StyledBody>
            <Slider slides={Constant(language)} options={{scrollType:'dots'}}/>
            <ContentContainer displayType='Tiles' title={language.body.contentBlock1.label} data={TilesConstant(language)}/>
            <ContentContainer displayType='Full-Width' title={language.body.contentBlock2.label} data={FullWidthConstant(language)}/>
        </StyledBody>
    )
};

export default Body;