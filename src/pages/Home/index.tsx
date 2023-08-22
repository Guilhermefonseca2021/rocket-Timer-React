import { Play } from "phosphor-react";
import { HomeContainer, FormContainer, CountdownContainer, Separator, StartCountdownButton, TaskInput, MinutesAmountInput } from "./style";
import { useForm } from 'react-hook-form'



export function Home() {

    const { register, handleSubmit} = useForm()

    function handleSubmit(event) {
        
    }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        placeholder="De um nome para seu projeto" 
                        list="task-sugestions" 
                        id="task" 
                        type="text" 
                        {...register('task')}
                    />

                    <datalist id="task-sugestions">
                        <option value='Projeto 1' />
                        <option value='Projeto 2' />
                        <option value='abacate' />
                    </datalist>
                    <label htmlFor="">durante</label>
                    <MinutesAmountInput 
                        placeholder="00" 
                        type="number" 
                        id="minutesAnount" 
                        step={5}
                        min={5}
                        max={60}
                    />
                
                    <span>minutos. </span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>
                
                <StartCountdownButton disabled type="submit">
                    <Play size={24} />
                    Comecar
                </StartCountdownButton>      
            </form>
        </HomeContainer>
    )
}

