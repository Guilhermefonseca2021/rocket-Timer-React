// only types definitivos de this is arqquivo de tipagem
import 'styled-components';
import { defaultTheme } from '../styles/themes/defaults'

// nao decore é um exemplo bobo entao so tenha conhecimento ele colocado em algum repositorio.
type ThemeType = typeof defaultTheme;

// td vez q importar o styled components a typagem q ele vai puxar é o q definir aqui
// com import antes agr declarar aqui se nao estario meio q criando dnv
declare module 'styled-components' {
    // declaro aqui para sugerir qnd chamar nosso tema as propriedades q tem
    export interface DefaultTheme extends ThemeType {}
}



