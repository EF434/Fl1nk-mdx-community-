// Page buttons on nav bar
const home_button = document.getElementById('nav-home');
const feed_button = document.getElementById('nav-feed');
const program_button = document.getElementById('nav-program');
const post_button = document.getElementById('nav-create-post');

// Page sections
const home_page = document.getElementById('home');
const feed_page = document.getElementById('feed');
const program_page = document.getElementById('program');
const post_page = document.getElementById('create-post');

// home page and login/register page switching logic
const form_checkbox = document.getElementById("checkbox");
const home_view = document.getElementById('home-view');
const login_register_page = document.getElementById('auth-page');
const login_register_button = document.getElementById('login-register-page');
const profile_setup_button = document.getElementById('profile_setup_page');
const profile_setup_page = document.getElementById('profile-page');
const backHomeButtons = document.querySelectorAll('.back-home');
const navButtons = document.querySelectorAll(".nav-links button");



const communityPage = document.getElementById('community-section');
const backToCommunities = document.getElementById('back-to-communites');
let pages = document.querySelectorAll('.page');

function switch_page(page_id){

    for (const page of pages) {
        page.hidden = page.id !== page_id;
    }

    home_button.classList.toggle('active', page_id === 'home');
    feed_button.classList.toggle('active', page_id === 'feed');
    program_button.classList.toggle('active', page_id === 'program');
    post_button.classList.toggle('active', page_id === 'create-post');

    const isHome = page_id === "home";

    document.querySelector(".nav-links").hidden = !isHome;
    document.getElementById("back-home-button").hidden = isHome;
    

    for (const button of navButtons) {
        button.classList.toggle("active", button.dataset.page === page_id);
    }
}

// switch the pages
home_button.addEventListener('click', () =>
    switch_page('home'));
feed_button.addEventListener('click', () => 
    switch_page('feed'));
program_button.addEventListener('click', () => 
    switch_page('program'));
post_button.addEventListener('click', () => 
    switch_page('create-post'));

switch_page('home');



login_register_button.addEventListener('click', () => {
  home_view.hidden = true;
  login_register_page.hidden = false;
});

profile_setup_button.addEventListener('click', () => {
    home_view.hidden = true;
    login_register_page.hidden = true;
    profile_setup_page.hidden = false;
});

backHomeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        login_register_page.hidden = true;
        profile_setup_page.hidden = true;
        home_view.hidden = false;
        switch_page('home');
    });
});

document.getElementById("show-signup").onclick = function () {
    form_checkbox.checked = false;
};

document.getElementById("show-login").onclick = function () {
    form_checkbox.checked = true;
};

const community_tabs = document.querySelectorAll('.community-tabs button');

community_tabs.forEach(button => {
    button.addEventListener('click', () => {
        community_tabs.forEach(tab => tab.classList.remove('active'));

        button.classList.add('active');
    });
});



const feedTabs = document.querySelectorAll(".feed-tabs .feed-tab");

feedTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        feedTabs.forEach(function (otherTab) {
            otherTab.classList.remove("active");
        });

        tab.classList.add("active");
    });
});




// ////////////// 
const postPopup = document.getElementById("post-popup");
const createPostButton = document.getElementById("create-post-button");
const cancelPostButton = document.getElementById("cancel-post");
const postForm = document.getElementById("post-card");

createPostButton.addEventListener("click", function () {
    postPopup.hidden = false;
    postForm.querySelector("select").focus();
});

cancelPostButton.addEventListener("click", function () {
    postForm.reset();
    postPopup.hidden = true;
    createPostButton.focus();
});


const viewCommunityButtons = document.querySelectorAll('.view-community');

viewCommunityButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Find the community card that contains the clicked View button.
        const card = button.closest('.community-item');


        document.getElementById('community-category').textContent =
            card.querySelector('.community-category').textContent;

        document.getElementById('community-members').textContent =
            card.querySelector('.community-bottom span').textContent;

        document.getElementById('community-description').textContent =
            card.querySelector('p').textContent;

        const cardImage = card.querySelector('.community-banner img');
        const bannerImage = document.getElementById('community-page-img');
        bannerImage.src = cardImage.src;
        bannerImage.alt = cardImage.alt;

        document.getElementById('community-discussions').textContent =
            'No discussions yet.';

        switch_page(communityPage.id);
    });
});

backToCommunities.addEventListener('click', function () {
    switch_page('feed');
});