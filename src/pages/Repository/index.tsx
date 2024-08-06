import React from 'react';
import { useMatch, Link } from 'react-router-dom';

import { Header, RepositoryInfo, Issues } from './styles';
import logo from '../../assets/Logo.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'



const Repository: React.FC = () => {

    const match = useMatch('/repositories/*');

    const repositoryParam = match?.params['*'];



  return (
    <>
        <Header>
            <img src={logo} alt="GitHub Explorer" />
            <Link to="/">
                <FiChevronLeft size={16}/>
                Voltar
            </Link>
        </Header>

        <RepositoryInfo>
            <header>
                <img src="https://avatars.githubusercontent.com/u/132403350?v=4" alt="" />
                <div>
                    <strong>test-repo</strong>
                    <p>usando para teste de paragrafo</p>
                </div>
            </header>
            <ul>
                <li>
                    <strong>1808</strong>
                    <span>Stars</span>
                </li>
                <li>
                    <strong>48</strong>
                    <span>Forks</span>
                </li>
                <li>
                    <strong>67</strong>
                    <span>Issues</span>
                </li>
            </ul>
        </RepositoryInfo>

        <Issues>
            <Link to= {'qdawdaw'}>
                <div>
                    <strong>adawdwad</strong>
                    <p>adwadawdwa</p>
                </div>
                <FiChevronRight size={20}/>
            </Link>
        </Issues>
    </>
    
  );
}

export default Repository;
