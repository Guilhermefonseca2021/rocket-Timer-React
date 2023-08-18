// esse css é a corzinha do css in js.
import styled, { css, } from 'styled-components';


// variavel de typagem para abstrair em toda nossa interface
export type ButtonVariant = 'primary' | 'secondary' | 'danger' |  'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}
// 'exporto' um elemento como const e dou o elemento que recebe 'button'
export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;

    background-color: ${props => props.theme['green-500']};
    color:${props => props.theme.white};
    
    /* ${props => {
        return css`
            background-color: ${buttonVariants[props.variant]}`
    }} */
`


