import { Outlet } from "react-router-dom";

import { Cabecalho, Conteudo, Rodape } from "../../components";
import { useAppContext } from "../../hooks";


const LayoutPadrao = () => {
    const { desenvolvedor } = useAppContext();
    return(
        <>
            <Cabecalho/>
            <Conteudo>
                <Outlet/>
            </Conteudo>
            <Rodape desenvolvedor = {desenvolvedor}/> 
        </>
    );
};

export { LayoutPadrao };