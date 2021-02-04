import React from 'react';
import {ThemeProvider} from '@emotion/react';

import LanguageContext from './shared/language/language';
import russian from './shared/language/russian';

import light from './shared/styled/light';

import Header from './shared/components/Header';

const App =()=>{

  return(
    <LanguageContext.Provider value={russian}>
      <ThemeProvider theme={light}>
        <Header/>
      </ThemeProvider>
    </LanguageContext.Provider>
  )
}

export default App;
