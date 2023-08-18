import { Button } from './components/Button';
// so aplico o tema no que tiver aplicado o team provider
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/defaults';
import { GlobalStyle } from './styles/global';

export function App() {

  return (
    <>
    {/* como é um component recebe propriedade do elemento */}
    <ThemeProvider theme={defaultTheme}>
      <Button variant='primary' />
      <Button variant='secondary' />
      <Button variant='success'/>
      <Button variant='danger'/>
      <Button />

      <GlobalStyle />
    </ThemeProvider>
    </>
  )
}

export default App
