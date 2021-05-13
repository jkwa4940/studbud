import Navigation from './components/navigation';

const links = document.querySelectorAll('.top-nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');

var nav = new Navigation(links, pages);
nav.getLinks();

// for each loop
nav.links.forEach(function(link) {
    link.addEventListener('click', function() {
        let pageId = (nav.getHash(link));
        nav.setPage(pageId);
    })
})

const subLinks = document.querySelectorAll('.sub-nav > ul > li > a');
const subPages = document.querySelectorAll('.sub-page-container');

// subNav 
var subNav = new Navigation(subLinks, subPages);
// event listeners for subNav
subNav.links.forEach((link) => {
    link.addEventListener('click', function() {
        let pageId = subNav.getHash(link);
        subNav.setPage(pageId);
    })
})