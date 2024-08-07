interface RepositoriesDTO {
    full_name: string;
    name: string;
    description?: string
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
        html_url:string
    }
    html_url:string
}

export default RepositoriesDTO;