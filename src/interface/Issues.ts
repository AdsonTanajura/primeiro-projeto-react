interface IssueDTO {
    title: string;
    id: number;
    html_url: string;
    user: {
        login: string;
    }
}

export default IssueDTO;