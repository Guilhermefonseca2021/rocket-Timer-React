import { ButtonContainer, ButtonVariant } from './Button.styles.ts'

interface ButtonProps {
    variant?: ButtonVariant;
}

// mt comum estilizar com informacoes q vem dentro de propriedades
export function Button({ variant = 'primary'}: ButtonProps) {
    return (
        <ButtonContainer variant={variant}>Enviar</ButtonContainer>
    )
}