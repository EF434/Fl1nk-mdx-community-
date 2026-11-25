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
const back_home_button = document.getElementById('back-home');

let pages = document.querySelectorAll('.page');

function switch_page(page_id){

    home_page.hidden = page_id != 'home';
    feed_page.hidden = page_id != 'feed';
    program_page.hidden = page_id != 'program';
    post_page.hidden = page_id != 'create-post';

    home_button.classList.toggle('active', page_id === 'home');
    feed_button.classList.toggle('active', page_id === 'feed');
    program_button.classList.toggle('active', page_id === 'program');
    post_button.classList.toggle('active', page_id === 'create-post');
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

back_home_button.addEventListener('click', () => {
    login_register_page.hidden = true;
    profile_setup_page.hidden = true;
    home_view.hidden = false;
    switch_page('home');
});

back_home_button.addEventListener('click', () => {
  login_register_page.hidden = true;
  home_view.hidden = false;
  switch_page('home');
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