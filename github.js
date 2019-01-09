class GitHub {
	constructor() {
		this.client_id = 'b46d7a18fd9b30b74b85';
		this.client_secret = '235c72d5c439d4f09b4b3c6054116179dc2e883b';

		this.repos_count = 10;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();
		const repos = await reposResponse.json();

		return {
			profile: profile,
			repos: repos
		}
	}

}