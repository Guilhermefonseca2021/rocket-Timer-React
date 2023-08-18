import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

// aqui é onde o conteudo vai transicionar. para isso outlet (espaco p ser inserido o conteudo)
// react router dom usa o outlet p expecionar onde o conteudo vai ser inserido
export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}