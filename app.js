

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
const userBio = document.querySelector('#user-bio');

let searchResult = "https://api.github.com/users/octocat";

const noResult = document.getElementById('no-result');
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       const githubApi = JSON.parse(xhttp.responseText);
       avatar.innerHTML = `<img src="${githubApi.avatar_url}">`;
       userName.textContent = `${githubApi.name}`;
       userTag.textContent = `@${githubApi.login}`;
       userTag.href = `${githubApi.html_url}`;
       joined.textContent = `Joined ${new Date().getDate(githubApi.created_at)} ${String(new Date(githubApi.created_at)).split(' ')[1]} ${new Date(githubApi.created_at).getFullYear()}`;

       if(githubApi.bio === null){
           userBio.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, pariatur mollitia.";
       } else {userBio.textContent = githubApi.bio};

       repoCount.textContent = githubApi.public_repos;
       followerCount.textContent = githubApi.followers;
       followingCount.textContent = githubApi.following;

        town.textContent = githubApi.location;
        blog.textContent = githubApi.blog;
        blog.href = `${githubApi.blog}`;
        company.textContent = githubApi.company;
        twitter.textContent = (githubApi.twitter_username ? githubApi.twitter_username : "Not Available")
        if(twitter.textContent === "Not Available"){
            document.querySelector('.twitter').style.opacity = '0.3';
        }
        noResult.style.display = 'none';
    } else if (this.readyState == 4 && this.status == 404) {
        noResult.style.display = 'block';
    }
};
xhttp.open("GET", searchResult , true);
xhttp.send();

searchBtn.addEventListener('click', ()=> {
    
    // store previous search result
    let previousResult = searchResult;
    // redefine NEW search result
    searchResult = `https://api.github.com/users/${searchInput.value}`;

    //remove 'No result' from search box for new search
    const noResult = document.getElementById('no-result');
    noResult.style.display = 'none'

    // if(xhttp.status === 404){
    //     //If no user exist, keep existing user, show 'No result'
    //     searchResult = previousResult;
    //     noResult.style.display = 'block';
    // } 

    xhttp.open("GET", searchResult , true);
    xhttp.send();
})

const drkBtn = document.querySelector('.dark-btn');

const drkBtnText = document.getElementById('dark-btn-text');

const lightBtn = document.querySelector('.light-btn');
const lightBtnText = document.querySelector('.light-btn-text');

const header = document.querySelector('header');
const followerDiv = document.querySelector('.follower-div');
const userLinks = document.querySelector('.user-links');
const following = document.querySelector('.following');
const txtColorArr = [header, searchInput, userBio, joined, userName, followerDiv, userLinks, following, blog]


const bgColorPrimaryArr = [document.querySelector('body'), followerDiv];

const bgColorSecondaryArr = [document.querySelector('.user-container'), document.querySelector('.search-box'), searchInput];

const modeSwitch = document.querySelectorAll('.mode-switch');

for(let i=0; i < modeSwitch.length; i++) {
    modeSwitch[i].addEventListener('click', () => {
        for(let element of txtColorArr){
            element.classList.toggle('dark-txt-primary');
        }
        bgColorPrimaryArr.forEach(item => item.classList.toggle('dark-txt-primary'));
        bgColorSecondaryArr.forEach(item => item.classList.toggle('dark-bg-secondary'));
        
        if(drkBtn.style.display !== 'none'){
            drkBtn.style.display = 'none';
            lightBtn.style.display = 'flex';
            document.body.style.backgroundColor = '#141D2F';
            document.querySelector('.follower-div').style.backgroundColor = '#141D2F';
        } else if (drkBtn.style.display === 'none') {
            lightBtn.style.display = 'none';
            drkBtn.style.display = 'flex';
            document.body.style.backgroundColor = 'var(--light-bg)';
            document.querySelector('.follower-div').style.backgroundColor = 'var(--light-bg)';
        }
    })
}
