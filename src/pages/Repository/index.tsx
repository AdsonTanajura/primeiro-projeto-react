import React, { useEffect, useState } from 'react';
import { useMatch, Link } from 'react-router-dom';
import api from "../../services/api";
import RepositoriesDTO from '../../interface/Repositories';
import IssueDTO from '../../interface/Issues';


import { Header, RepositoryInfo, Issues } from './styles';
import logo from '../../assets/Logo.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'



const Repository: React.FC = () => {
    const [ repository,setRepository ]  = useState<RepositoriesDTO | null>(null);
    const [ issues, setIssues ] = useState<IssueDTO[]>([]);

    const match = useMatch('/repositories/*');
    const repositoryParam = match?.params['*'];

    useEffect(() => {
        api.get(`repos/${repositoryParam}`).then(response => {
            setRepository(response.data);
        })
        api.get(`repos/${repositoryParam}/issues`).then(response => {
            setIssues(response.data);
        })
    }, [repositoryParam]);


  return (
    <>
        <Header>
            <img src={logo} alt="GitHub Explorer" />
            <Link to="/">
                <FiChevronLeft size={16}/>
                Voltar
            </Link>
        </Header>

        {repository && (
            <RepositoryInfo>
                <header>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                    <div>
                        <strong>{repository.name}</strong>
                        <p>{repository.description}</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>{repository.stargazers_count}</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>{repository.forks_count}</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>{repository.open_issues_count}</strong>
                        <span>Issues</span>
                    </li>
                </ul>
        </RepositoryInfo>
        )}

        <Issues>
            {issues.map(issues => (
                <a key={issues.id} href= {issues.html_url} target='_blank'>
                <div>
                    <strong>{issues.title}</strong>
                    <p>{issues.user.login}</p>
                </div>
                <FiChevronRight size={20}/>
            </a>
            ))}
        </Issues>
    </>
    
  );
}

export default Repository;
