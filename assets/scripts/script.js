const drawerButton = document.querySelector('#drawerButton');
const drawerNavigation = document.querySelector('#drawerNavigation');
const main = document.querySelector('main');

drawerButton.addEventListener('click', () => {
    drawerNavigation.classList.toggle('open');
});

main.addEventListener('click', () => {
    drawerNavigation.classList.remove('open');
});
