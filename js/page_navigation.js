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
