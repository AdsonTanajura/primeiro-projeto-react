import React, { useState, FormEvent } from "react";
import api from "../../services/api";

import { Tilte, Form, Repositories, Error } from "./styles";
import logo from '../../assets/Logo.svg'
import { FiChevronRight } from 'react-icons/fi'

import RepositoriesDTO from "../../interface/Repositories";
import Repository from "../Repository";

const Dashbord: React.FC = () => {
    const [ newRepo, setNewRepo ] = useState('');
    const [inputError, setInputError] = useState('');
    const [ repositories, setRepositories ] = useState<RepositoriesDTO[]>([]);

   async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

    if(!newRepo) {
        setInputError('Digite o auto/nome do repositorio')
        return;
    }

        try {
            const response = await api.get<RepositoriesDTO>(`repos/${newRepo}`);

            const repository = response.data;

            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
            
        } catch (error) {
            setInputError('Erro na busca por esse repositorio')
        };
    };

    return (
        <>
            <img src={logo} alt="GitHub Explorer" />
            <Tilte>Explore repositórios
            no Github.</Tilte>
            <Form hasError= {!!inputError} onSubmit={handleAddRepository}>
                <input 
                    value={newRepo} 
                    onChange={e => setNewRepo(e.target.value)} placeholder="Digite o nome do repositorio"
                />
                <button type="submit">Pesquisar</button>
            </Form>
            { inputError && <Error>{inputError}</Error> }
            <Repositories>
                {repositories.map(repository => (
                           <a target="_blank" key= {repository.full_name} href={repository.html_url}>
                           <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                           <div>
                               <strong>{repository.name}</strong>
                               <p>{repository.description}</p>
                           </div>
                           <FiChevronRight size={20}/>
                           </a>
           
                ))}
            </Repositories>
        </>
        
        ); 
}

export default Dashbord;