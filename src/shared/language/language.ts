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
        search:string;
        langChange:{
            toRU: string;
            toUA: string;
            toENG: string;
        }
    }
}

const LanguageContext = React.createContext(russian);

export default LanguageContext