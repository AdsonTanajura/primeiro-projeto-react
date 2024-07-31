import React from "react";

import { Tilte, Form, Repositories } from "./styles";
import logo from '../../assets/Logo.svg'
import { FiChevronRight } from 'react-icons/fi'

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

            <Repositories>
                <a href="test">
                <img src="https://avatars.githubusercontent.com/u/132403350?v=4" alt="Adson Nunes" />
                <div>
                    <strong>frist-project-node</strong>
                    <p>kadmawkdnawldknawdlamwdpawdklwalamd</p>
                </div>
                <FiChevronRight size={20}/>
                </a>

                <a href="test">
                <img src="https://avatars.githubusercontent.com/u/132403350?v=4" alt="Adson Nunes" />
                <div>
                    <strong>frist-project-node</strong>
                    <p>kadmawkdnawldknawdlamwdpawdklwalamd</p>
                </div>
                <FiChevronRight size={20}/>
                </a>
                
                <a href="test">
                <img src="https://avatars.githubusercontent.com/u/132403350?v=4" alt="Adson Nunes" />
                <div>
                    <strong>frist-project-node</strong>
                    <p>kadmawkdnawldknawdlamwdpawdklwalamd</p>
                </div>
                <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
        
        ); 
}

export default Dashbord;