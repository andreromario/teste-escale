function mountResult(data) {
	jQuery(data).each(function() {
		console.log(this);
		var repoName = '<h3><a href="' + this.html_url + '" title="' + this.name + '" target="_blank">' + this.name + '</a></h3>';
		var repoAvatarOwner = '<p class="owner"><a href="' + this.owner.html_url + '" title="' + this.owner.login + '" target="_blank"><img src="' + this.owner.avatar_url + '" title="' + this.owner.login + '" class="avatar-owner"></a></p>';
		var repoDescription = '<p>' + this.description + '</p>';
		var repoLanguage = '<p>Language: <strong>' + this.language + '</strong></p>';
		var repoStargazersCount = '<p>Stargazers Count: <strong>' + this.stargazers_count + '</strong></p>';
		var repoOpenIssuesCount = '<p>Open Issues Count: <strong>' + this.open_issues_count + '</strong></p>';
		var repoCreated = '<p>Created at: <strong>' + this.created_at + '</strong></p>';
		var repoPushed = '<p>Pushed at: <strong>' + this.pushed_at + '</strong></p>';

		jQuery('<div class="grid-4 repo"><article><div class="container"><div class="grid-12">' + repoName + '</div><div class="header-repo"><div class="grid-4">' + repoAvatarOwner + '</div><div class="grid-8">' + repoDescription + repoLanguage + '</div></div><div class="footer-repo"><div class="grid-12">' + repoStargazersCount + repoOpenIssuesCount + repoCreated + repoPushed + '</div></div></div></article></div>').appendTo('#gerar');
	});
}

jQuery.ajax({
	method: "GET",
	url: "https://api.github.com/users/wilfernandesjr/starred",
	dataType: "json",
	success: function(data) {
		mountResult(data);
	}
});