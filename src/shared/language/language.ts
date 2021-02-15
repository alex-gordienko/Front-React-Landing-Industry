import React from 'react';
import english from './english';
import russian from './russian'

export interface ILanguage{
    header:{
        menu:{
            main: string;
            service: string;
            products: string;
            about: string;
            contacts: string;
        }
        search:string;
        langChange:{
            toRU: string;
            toUA: string;
            toENG: string;
        }
    }
    body:{
        slider:{
            slide1:string;
            slide2: string;
            slide3: string;
            slide4: string;
            slide5: string;
        }
        contentBlock1: {
            label: string;
            elem1: string;
            elem2: string;
            elem3: string;
            elem4: string;
            elem5: string;
            elem6: string;
            elem7: string;
            elem8: string;
        };
        contentBlock2: {
            label: string;
            elem1:{
                elemLabel: string;
                text: string;
            };
            elem2:{
                elemLabel: string;
                text: string;
            };
        };
    };
    footer:{
        label1: string;
        label2: string;
        label3: string;
    }
}

const LanguageContext = React.createContext(english);

export default LanguageContext