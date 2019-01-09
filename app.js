(function(){
	//Init GitHub
	const github = new GitHub();

	//Init UI
	const ui = new UI();

	//Search Input
	const searchUser = document.getElementById('searchUser');

	//Search input evet listener

	searchUser.addEventListener('keyup', (e)=> {
		
		//Get input text
		const userText = e.target.value;

		if(userText) {
			//make http call
			github.getUser(userText)
			.then(data => {
				if(data.profile.message === 'Not Found') {
					//Show alert
					ui.showAlert('User not found', 'alert alert-danger');
				} else {
					//Display profile and repos
					ui.showProfile(data.profile);
					ui.showRepos(data.repos);
				}
			})
		} else {
			ui.clearProfile();

		}

	});
})();