import React, { useState } from 'react';
import {ThemeProvider} from '@emotion/react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LanguageContext from './shared/language/language';
import russian from './shared/language/russian';
import english from './shared/language/english';

import light from './shared/styled/light';

import Header from './shared/components/Header';
import Body from './shared/components/Body';

const App =()=>{
  const [lang, setLang] = useState(2);

  const Main = () =>{
  
    return(
      <div>
        <Header selectedLang={lang} onLangSelect={(e)=>setLang(e)}/>
        <Body/>
      </div>
    )
  }

  return(
    <LanguageContext.Provider value={lang===1? english: russian}>
      <ThemeProvider theme={light}>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Main}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageContext.Provider>
  )
}

export default App;
