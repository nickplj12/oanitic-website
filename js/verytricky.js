const buttonWidth = 100;
const buttonHeight = 10;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.funnyclose');

    //button.addEventListener('click', () => alert('clicked close :('));

    button.addEventListener('mouseover', () => {
        console.log('hovered')
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });
});

window.onpopstate=function()
{
  alert("Back/Forward clicked!");
}