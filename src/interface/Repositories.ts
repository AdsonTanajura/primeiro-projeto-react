interface RepositoriesDTO {
    full_name: string;
    name: string;
    description?: string
    owner: {
        login: string;
        avatar_url: string;
        html_url:string
    }
    html_url:string
}

export default RepositoriesDTO;