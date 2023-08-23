import { Play } from "phosphor-react";
import { HomeContainer, FormContainer, CountdownContainer, Separator, StartCountdownButton, TaskInput, MinutesAmountInput } from "./style";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from "react";

// no caso como tamo validando um obj validamos aqui
const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'informe a tarefa'),
    MinutesAmount: zod
        .number()
        .min(5, 'O ciclo precisa ser de no minimo 5minutos')
        .max(60, 'o ciclo precisa ser de no maximo 60minutos'),
})

// interface newCycleFormData {
//     task: string;
//     minutesAmount: number;
// }

// typagem para dizer que algo inferem faz msm coisa acima unico no typescript
type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
    id: string,
    task: string,
    minutesAmount: number,
    isActive: boolean,
};

// register retorna onchange, onblur, onfocus etc
export function Home() {
    // importante icinicia o cycle numa lista msm q vazia
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    // qro assistir nosso evento chamo o watch
    const { register, handleSubmit, watch, formState, reset }= useForm<newCycleFormData>({
        // qual meu esquema de validacao de q forma qro validar
        resolver: zodResolver(newCycleFormValidationSchema),
        // junto com resolver posso definir os valor inicial de cada campo
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    function handleCreateNewCycle(data: newCycleFormData) {
        const id = String(new Date().getTime());

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.MinutesAmount,
        }

        setCycles(state => [...cycles, newCycle])
        setActiveCycleId(id);

        reset();
    }

    const activeCycle = cycles.find(cycle => styled.id == activeCycleId)

    console.log(formState.errors)
    // agr posso saber oq ta acontecendo na nossa task
    const task = watch('task')
    const isSubmitDisabled = !task;

    return (
        <HomeContainer>
            {/* assim o modo q o useform lida, passando argumento uma funcao do evento como no usetate e passa a funcao nossos dados */}
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        placeholder="De um nome para seu projeto" 
                        list="task-sugestions" 
                        id="task" 
                        type="text" 
                        // register é uma funcao q retorna alguns em todos para trabalhar com input
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
                        {...register('minutesAmount', { valueAsNumber: true})}
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
                
                <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                    <Play size={24} />
                    Comecar
                </StartCountdownButton>      
            </form>
        </HomeContainer>
    )
}

