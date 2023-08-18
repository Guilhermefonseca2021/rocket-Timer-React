// so aplico o tema no que tiver aplicado o team provider
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/defaults';
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global';
import { Router } from './Router';

export function App() {

  return (
    <>
    {/* como é um component recebe propriedade do elemento */}
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        
        
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
    </>
  )
}

export default App
