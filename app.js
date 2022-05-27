

const avatar = document.getElementById('avatar');
const userName = document.getElementById('user-name');
const userTag = document.getElementById('user-tag');
const joined = document.getElementById('joined');

const repoCount = document.getElementById('repo-count');
const followerCount = document.getElementById('follower-count');
const followingCount = document.getElementById('following-count');

const town = document.getElementById('town');
const blog = document.getElementById('blog');
// const twitter = document.getElementById('twitter');
// const company = document.getElementById('company');

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

let searchResult = "https://api.github.com/users/octocat";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       const githubApi = JSON.parse(xhttp.responseText);
       avatar.innerHTML = `<img src="${githubApi.avatar_url}">`;
       userName.textContent = `${githubApi.name}`;
       userTag.textContent = `@${githubApi.login}`;
       joined.textContent = `Joined ${new Date().getDate(githubApi.created_at)} ${String(new Date(githubApi.created_at)).split(' ')[1]} ${new Date(githubApi.created_at).getFullYear()}`;

       repoCount.textContent = githubApi.public_repos;
       followerCount.textContent = githubApi.followers;
       followingCount.textContent = githubApi.following;

        town.textContent = githubApi.location;
        blog.textContent = githubApi.blog;
        company.textContent = githubApi.company;
        twitter.textContent = (githubApi.twitter_username ? githubApi.twitter_username : "Not Available")
        if(twitter.textContent === "Not Available"){
            document.querySelector('.twitter').style.opacity = '0.3'
        }

        
    }
};
xhttp.open("GET", searchResult , true);
xhttp.send();

searchBtn.addEventListener('click', ()=> {
    searchResult = `https://api.github.com/users/${searchInput.value}`;
    xhttp.open("GET", searchResult , true);
    xhttp.send();
})

const drkBtn = document.querySelector('.dark-btn');
const drkBtnText = document.getElementById('dark-btn-text');

const lightBtn = document.querySelector('.light-btn');
const lightBtnText = document.querySelector('.light-btn-text');

// Option to set app to DARK MODE
drkBtn.addEventListener('click', () => {
    drkBtn.style.display = 'none'
    lightBtn.style.display = 'flex'
    document.body.style.backgroundColor = '#141D2F';
    document.querySelector('.follower-div').style.backgroundColor = '#141D2F';
    document.querySelector('.search-box').style.backgroundColor = '#1E2A47'
    document.querySelector('input').style.backgroundColor = '#1E2A47'
    document.querySelector('input').style.color = '#ffffff'
    document.querySelector('.user-container').style.backgroundColor = '#1E2A47'
    document.querySelector('header').style.color = '#ffffff';
})

// Option to set app to LIGHT MODE
lightBtn.addEventListener('click', () => {
    lightBtn.style.display = 'none'
    drkBtn.style.display = 'flex'
})


console.log(drkBtn)