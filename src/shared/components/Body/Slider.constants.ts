import Metal1 from '../../../assets/metal1.png';
import Metal2 from '../../../assets/metal2.jpg';
import Metal3 from '../../../assets/metal3.jpg';
import Metal4 from '../../../assets/metal4.jpg';
import Cat from '../../../assets/cat1.jpg';

import {ILanguage} from '../../language/language';

export const Constant = (language:ILanguage) => ([
    {
        img: Metal1,
        label: language.body.slider.slide1
    },
    {
        img: Metal2,
        label: language.body.slider.slide2
    },
    {
        img: Metal3,
        label: language.body.slider.slide3
    },
    {
        img: Metal4,
        label: language.body.slider.slide4
    },
    {
        img: Cat,
        label: language.body.slider.slide5
    }
])