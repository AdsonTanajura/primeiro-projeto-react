import React from "react";

import { Tilte, Form } from "./styles";
import logo from '../../assets/Logo.svg'

const Dashbord: React.FC = () => {

    return (
        <>
            <img src={logo} alt="GitHub Explorer" />
            <Tilte>Explore repositórios
            no Github.</Tilte>
            <Form action="">
                <input placeholder="Digite o nome do repositorio" />
                <button type="submit">Pesquisar</button>
            </Form>
        </>
        
        ); 
}

export default Dashbord;