import React from 'react';
import {ThemeProvider} from '@emotion/react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LanguageContext from './shared/language/language';
import russian from './shared/language/russian';

import light from './shared/styled/light';

import Header from './shared/components/Header';

const App =()=>{

  const Main = () =>{
    
    return(
      <Header/>
    )
  }

  return(
    <LanguageContext.Provider value={russian}>
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
