import Metal21 from '../../../assets/metal21.jpg';
import Metal22 from '../../../assets/metal22.jpg';
import Metal23 from '../../../assets/metal23.jpg';
import Metal24 from '../../../assets/metal224.jpg';
import Metal25 from '../../../assets/metal24.jpg';
import Metal26 from '../../../assets/metal25.jpg';
import Metal27 from '../../../assets/metal26.jpg';
import Metal28 from '../../../assets/metal27.jpg';

import FullWidth1 from '../../../assets/FullWidth1.jpg';
import FullWidth2 from '../../../assets/FullWidth2.jpg';

import {ILanguage} from '../../language/language';

export const TilesConstant = (language: ILanguage) => ([
    {
        img: Metal21,
        label: language.body.contentBlock1.elem1
    },
    {
        img: Metal22,
        label: language.body.contentBlock1.elem2
    },
    {
        img: Metal23,
        label: language.body.contentBlock1.elem3
    },
    {
        img: Metal24,
        label: language.body.contentBlock1.elem4
    },
    {
        img: Metal25,
        label: language.body.contentBlock1.elem5
    },
    {
        img: Metal26,
        label: language.body.contentBlock1.elem6
    },
    {
        img: Metal27,
        label: language.body.contentBlock1.elem7
    },
    {
        img: Metal28,
        label: language.body.contentBlock1.elem8
    }
])

export const FullWidthConstant = (language:ILanguage) => ([
    {
        img: FullWidth1,
        label: language.body.contentBlock2.elem1.elemLabel,
        text:  language.body.contentBlock2.elem1.text
    },
    {
        img: FullWidth2,
        label: language.body.contentBlock2.elem2.elemLabel,
        text: language.body.contentBlock2.elem2.text
    },
])