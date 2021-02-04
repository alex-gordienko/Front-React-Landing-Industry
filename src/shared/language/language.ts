import React from 'react';
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
    }
}

const LanguageContext = React.createContext(russian);

export default LanguageContext